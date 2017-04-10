var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  degree: { type: String, required: true },
  yearOne: {
    fall: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    spring: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    summer: [{ type: Schema.Types.ObjectId, ref: 'Course'}]
  },
  yearTwo: {
    fall: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    spring: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    summer: [{ type: Schema.Types.ObjectId, ref: 'Course'}]
  }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Degree', schema);
