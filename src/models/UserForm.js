const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: false,
    },
    done: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('UserForm', userSchema);

module.exports = User;
