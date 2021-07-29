const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const NetflixSchema = new mongoose.Schema({
  user_mail: {
    type: String,
    required: true,
    unique: true,
    validate: (val) => {
      if (!validator.isEmail(val)) {
        throw new Error("Email is not a valid email");
      }
    },
  },
  hash_password: {
    type: String,
    required: true,
    maxlength: 64,
  },
  first_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  last_name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  registration_date: {
    type: Date,
    required: true,
  },
  activation_date: {
    type: Date,
    required: true,
  },
  ending_date: {
    type: Date,
    required: true,
  },
  plan_type: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  user_token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  user_profiles: [
    {
      user_profile_associate: {
        assoc_name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 20,
        },
        profile_user_url: {
          type: String,
          required: true,
        },
        registration_date: {
          type: Date,
          required: true,
        },
      },
    },
  ],
});
//
//
NetflixSchema.pre("save", async function (next) {
  if (this.isModified("hash_password")) {
    this.hash_password = await bycrypt.hash(this.hash_password, 12);
  }
  next();
});
//
NetflixSchema.methods.generateAuthToken = async function () {
  try {
    let tokenCreated = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.user_token = this.user_token.concat({ token: tokenCreated });
    await this.save();
    return tokenCreated;
  } catch (err) {
    console.log(err.message);
  }
};
//
//
const NetflixModel = new mongoose.model(
  "Netflix_User_Data_Collection",
  NetflixSchema
);
module.exports = NetflixModel;
