const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl, //save the redirect url in session before logging in
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

//Logout Route
router.get("/logout", userController.logout);

module.exports = router;
