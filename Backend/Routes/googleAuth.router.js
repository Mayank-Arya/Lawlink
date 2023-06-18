const express = require('express');
const passport = require('../config/google.auth');

const GoogleRouter = express.Router();

GoogleRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

GoogleRouter.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = GoogleRouter;