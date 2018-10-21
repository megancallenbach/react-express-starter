const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  gender: { type: String, default: "unknown" },
  profile: {
    img: { type: String, default: "" },
    title: { type: String, default: "" },
    skills: { type: Array, default: [] },
    level: { type: String, default: "" },
    description: { type: String, default: "" },
    complete: { type: Boolean, default: false },
  }
});

mongoose.model('users', userSchema);

module.exports = userSchema;