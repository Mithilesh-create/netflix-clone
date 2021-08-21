const express = require("express");
const router = new express.Router();
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const cors = require("cors");
router.use(express.json());
router.use(cors());
const {
  registerController,
  loginController,
  emailController,
  cookieController,
  cookieLogout,
  cookieLogoutAll,
} = require("../controllers/funcControllerAction");
const Authenticate = require("../middleware/authenticate");
//
router.post("/registerDB", registerController);
//
router.post("/loginDB", loginController);
//
router.post("/mailValidate", emailController);
//
router.get("/cookieVerification", Authenticate, cookieController);
//
router.get("/cookieRem", Authenticate, cookieLogout);
//
router.get("/cookieRemAll", Authenticate, cookieLogoutAll);
//
module.exports = router;
