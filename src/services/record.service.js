

const Record = require('../models/record.model');

const createNewRecord = async (input) => {
  const rec = await Record.create(input);
  console.log(rec)
  return rec;
};
const getAllRecords = async(limit)=>{
  const getRec = await Record
  .find({})
  .populate('company',['companyName','careerUrl'])
  .limit(parseInt(limit));
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

const recordbyname = async(searchText) =>{
  const regex = new RegExp(searchText, 'gmi')
  const getrec = await Record
  .find({$or:[
    {University_Name:{$regex: regex}},
    {Job_Title :{$regex: regex}},
    {Specialization:{$regex: regex}}
  ]
  })
  .populate('company',['companyName','careerUrl'])
 
  return getrec;
}

const getRecordsByCompanyId = async (ids) => {

  const records = await Record
  .find({ 'company': { $in: ids } })
  .populate('company',['companyName','careerUrl'])
  return records;
};

module.exports = {
    createNewRecord,
    getAllRecords,
    deleteTheRecord,
    deleteManyRec,
    recordIsPatch,
    replaceExisting,
    recordbyname,
    getRecordsByCompanyId
  };