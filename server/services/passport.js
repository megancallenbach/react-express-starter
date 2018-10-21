const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

const User = mongoose.model('users');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, username, password, done) => {
  User.findOne({ username: username }, function(err, user) {
    if (user) return done(null, user);
    const newUser = new User({
      username: username,
      email: req.body.email,
      password: bcrypt.hashSync(password, 10),
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }).save();
    return done(null, newUser);
  });
}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (bcrypt.hashSync(password, 10) != user.password) return done(null, false);
      return done(null, user);
    });
  }
));