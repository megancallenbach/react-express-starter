const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

const userRoutes = require('./routes/users');

const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

require('./models/User');
require('./services/passport');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.use('/api/user', userRoutes);

app.listen(PORT, console.log(`Listening on ${PORT}!`));