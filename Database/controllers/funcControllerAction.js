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
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "User Login Successfully" });
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
