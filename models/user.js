var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var fieldRemover = require('mongoose-field-remover');

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
  admin: { type: Boolean, default: false }
});

schema.plugin(mongooseUniqueValidator);
schema.plugin(fieldRemover, "password");

module.exports = mongoose.model('User', schema);
