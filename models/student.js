var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
  student: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  phone: { type: String, default: '' },
  link: { type: String, default: '' },
  public: { type: Boolean, default: false },
  available: { type: Boolean, default: false }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Student', schema);
