const express = require("express");
const GoogleRouter = express.Router();
const passport = require("../config/google.auth");
const {UserModel} = require("../Models/user.model");
const bcrypt = require("bcrypt")
let RedirectLink = `http://127.0.0.1:5500/`

GoogleRouter.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }));


GoogleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
  })
);

GoogleRouter.get("/login/success", async (req, res) => {
  if (!req.user) {
    return res.redirect(`${RedirectLink}/Frontend/index.html?authsuccess=false`)
  }
  let payload = req.user

  let userDetails = {
    Name: payload.name.givenName,
    email: payload.emails[0].value,
    password: payload.emails[0].value,
    role:"user",
    verify: true
  }
  // console.log(userDetails)
  console.log("Google Auth Accessed by" + userDetails.email);
  try {
    let user = await UserModel.find({ email: userDetails.email });
    if (user.length !== 0) {
      let id = user[0]._id
      res.redirect(`${RedirectLink}/Frontend/index.html?authsuccess=true&userID=${id}`)
    } else {
      bcrypt.hash(userDetails.email, 10, async (err, hash) => {
        if (hash) {
          userDetails.password = hash
          let instance = new UserModel(userDetails);
          await instance.save()
          res.redirect(`${RedirectLink}/Frontend/index.html?authsuccess=true&userID=${instance._id}`)
        }
      })
    }

  } catch (error) {
    console.log(error);
    res.redirect(`${RedirectLink}/Frontend/index.html?authsuccess=false`)
  }


});
GoogleRouter.get("/login/failed", (req, res) => {
  res.redirect(`${RedirectLink}/Frontend/index.html?authsuccess=false`)
});

GoogleRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${RedirectLink}`);
});




module.exports = GoogleRouter;