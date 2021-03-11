const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    company: { 
      type: Schema.Types.ObjectId, ref: 'Company' 
    },
    isApproved:{
      type:Boolean, default: false
    },
    University_Name: {
        type: String
    },
    Specialization:{
         type: String
    },
    Graduation_Year:{
        type: Number
    },
    Job_Title:{
        type: String
    },
    Job_Start_Date:{
        type: Date , default: Date.now()
    }
  },
  {
    timestamps: true,
  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;