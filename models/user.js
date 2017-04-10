var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var fieldRemover = require('mongoose-field-remover');

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  admin: { type: Boolean, default: false },

  student: {  isStudent: { type: Boolean, default: false},
              student_id: { type: Schema.Types.ObjectId, ref: 'Student'}
  },
  faculty: {  isFaculty: { type: Boolean, default: false},
              faculty_id: { type: Schema.Types.ObjectId, ref: 'Faculty'}
  }
});

schema.plugin(mongooseUniqueValidator);
schema.plugin(fieldRemover, "password");

var User = module.exports = mongoose.model('User', schema);
