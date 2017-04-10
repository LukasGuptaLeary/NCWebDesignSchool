var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
  faculty: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  department: { type: String, default: 'Web Technologies' },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  phone: { type: String, default: '' },
  link: { type: String, default: '' },
  public: { type: Boolean, default: false }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Faculty', schema, "faculty");
