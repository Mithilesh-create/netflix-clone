require("../connection/dbconn");
const NetflixModel = require("../schema/schema");
const bycrypt = require("bcrypt");
const date = require("date-and-time");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//
exports.registerController = async (req, res) => {
  const {
    user_mail,
    hash_password,
    first_name,
    last_name,
    plan_type,
    monthly_amount,
    stripeToken,
  } = req.body;
  if (
    !user_mail ||
    !hash_password ||
    !first_name ||
    !last_name ||
    !plan_type ||
    !monthly_amount ||
    !stripeToken
  ) {
    return res.status(422).json({ message: "Please fill the fields properly" });
  }
  //
  //
  try {
    const User_email = await NetflixModel.findOne({ user_mail: user_mail });
    if (User_email) {
      return res.status(422).json({ message: "Email ID already exists" });
    }
    //
    const stripeRes = await stripe.charges.create({
      amount: monthly_amount * 100,
      source: stripeToken,
      currency: "inr",
      description: `Account subscription of ${user_mail}`,
    });
    //
    if (stripeRes) {
      const now = new Date();
      //
      const registration_date = now;
      const activation_date = now;
      const ending_date = date.addDays(now, 30);
      //
      const NetflixModelInsert = new NetflixModel({
        user_mail: user_mail,
        hash_password: hash_password,
        first_name: first_name,
        last_name: last_name,
        plan_type: plan_type,
        registration_date: registration_date,
        activation_date: activation_date,
        ending_date: ending_date,
      });
      //middleware of encrypting the password is used here at passwordHashing.js
      await NetflixModelInsert.save();
      res.status(201).json({ message: "Successful" });
    } else {
      res.status(422).json({ message: "Payment Failed" });
    }
  } catch (error) {
    res.status(422).json({ message: "User Registration Failed" });
  }
};
//
//
exports.loginController = async (req, res) => {
  const { user_mail, unhashed_password } = req.body;
  if (!user_mail || !unhashed_password) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }
  try {
    let token;
    const User_login = await NetflixModel.findOne({ user_mail: user_mail });
    if (User_login) {
      const isMatch = await bycrypt.compare(
        unhashed_password,
        User_login.hash_password
      );
      token = await User_login.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Success" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.emailController = async (req, res) => {
  const { user_mail } = req.body;
  if (!user_mail) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }
  try {
    const User_mail_validation = await NetflixModel.findOne({
      user_mail: user_mail,
    });
    if (User_mail_validation) {
      return res.json({ message: "UserPresent" });
    } else {
      return res.json({ message: "UserAbsent" });
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
};

exports.emailActive = (req, res) => {
  res.json({ message: "Email is active" });
};
exports.cookieController = async (req, res) => {
  res.send(req.rootUser);
};

exports.cookieLogout = async (req, res) => {
  try {
    req.rootUser.user_token = req.rootUser.user_token.filter((elm) => {
      return elm.token != req.token;
    });
    res.clearCookie("jwtoken");
    await req.rootUser.save();
    res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};
//
exports.cookieLogoutAll = async (req, res) => {
  try {
    req.rootUser.user_token = [];
    res.clearCookie("jwtoken");
    await req.rootUser.save();
    res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

//
exports.NewProfileCreate = async (req, res) => {
  const { assoc_name, profile_user_url } = req.body;
  if (!assoc_name || !profile_user_url) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }
  try {
    const NetflixProfileAdd = await NetflixModel.findOne({
      _id: req.userID,
    });
    if (NetflixProfileAdd) {
      const NetflixProfileInsert = await NetflixProfileAdd.addProfiles(
        assoc_name,
        profile_user_url
      );
      await NetflixProfileInsert.save();
      res.status(201).send("Success");
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};
//
exports.ProfileUpdate = async (req, res) => {
  const { assoc_name, profile_user_url, id } = req.body;
  if (!assoc_name || !profile_user_url || !id) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }
  try {
    const NetflixProfileFind = await NetflixModel.findOneAndUpdate(
      {
        _id: req.userID,
        "user_profiles._id": id,
      },
      {
        $set: {
          "user_profiles.$.assoc_name": assoc_name,
          "user_profiles.$.profile_user_url": profile_user_url,
        },
      }
    );
    res.status(201).send(NetflixProfileFind);
  } catch (error) {
    return res.json({ error: error.message });
  }
};
//
exports.AllProfileData = async (req, res) => {
  try {
    const NetflixProfileData = await NetflixModel.findOne({
      _id: req.userID,
    });
    if (NetflixProfileData) {
      const ArrayProfileData = await NetflixProfileData;
      res.status(200).send(ArrayProfileData);
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};
