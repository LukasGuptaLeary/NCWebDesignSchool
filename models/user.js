var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  lastLogin: { type: Date, default: Date.now },
  profile: {
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    phone: { type: String, default: '' },
    link: { type: String, default: '' }
  },
  status: {
    faculty: { type: Boolean, default: false },
    student: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
  }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
