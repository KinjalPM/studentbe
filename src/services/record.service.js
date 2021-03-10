

const Record = require('../models/record.model');

const createNewRecord = async (input) => {
  const rec = await Record.create(input);
  console.log(rec)
  return rec;
};
const getAllRecords = async()=>{
  const getRec = await Record
  .find({})
  .populate('company',['companyName','careerUrl']);
  return getRec;
}

const deleteTheRecord = async(id)=>{
  const del = await Record.findByIdAndDelete(id);
  return del;
}

const deleteManyRec = async(id)=>{
  const records = await Record.deleteMany({company:id});
  return records;
}
const recordIsPatch = async(upd)=>{
  const rec = await Record.findById(upd._id).update(upd);
  return rec;
}
const replaceExisting = async(upd)=>{
  const rec = await Record.findById(upd._id).replaceOne(upd);
  return rec;
}

module.exports = {
    createNewRecord,
    getAllRecords,
    deleteTheRecord,
    deleteManyRec,
    recordIsPatch,
    replaceExisting
  };