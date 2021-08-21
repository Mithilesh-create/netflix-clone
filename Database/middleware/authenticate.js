const jwt = require("jsonwebtoken");
const NetflixModel = require("../schema/schema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await NetflixModel.findOne({
      _id: verifyToken._id,
      "user_token.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (e) {
    res.status(401).send("Unauthorized:No Token Provided");
  }
};
module.exports = Authenticate;
