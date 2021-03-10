const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: false,
      index: true,
      unique:true
    },
    careerUrl:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);
companySchema.plugin(uniqueValidator);
const Company = mongoose.model('Company', companySchema);
module.exports = Company