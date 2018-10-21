const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();

router.get('/', function(req, res) {
  if (req.user) { res.send({ user: req.user }) };
  res.send({ user: false });
});

router.post('/signup',
  passport.authenticate('local-signup'),
  function(req, res) {
    res.send({
      success: true,
      user: req.user
    });
  }
);

router.post('/login',
  passport.authenticate('local-login'),
  function(req, res) {
    res.send({
      success: true,
      user: req.user
    });
  }
);

module.exports = router;