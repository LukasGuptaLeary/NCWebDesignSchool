var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
  prefix: {type: String, required: true, unique: true },
  title: {type: String, required: true},
  prerequisites: [{type: Schema.Types.ObjectId, ref: 'Course'}],
  corequisites: [{type: Schema.Types.ObjectId, ref: 'Course'}],
  description: {type: String, required: true},
  classH: {type: Number, required: true},
  labH: {type: Number, required: true},
  creditH: {type: Number, required: true},
  instructor: [{type: Schema.Types.ObjectId, ref: 'Faculty'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Course', schema);
