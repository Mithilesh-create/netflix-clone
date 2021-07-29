const express = require("express");
const router = new express.Router();
const cors = require("cors");
router.use(express.json());
router.use(cors());
const {
  registerController,
  loginController,
  emailController,
} = require("../controllers/funcControllerAction");
//
router.post("/registerDB", registerController);
//
router.post("/login", loginController);
// 
router.post("/mailValidate", emailController);

//
module.exports = router;
