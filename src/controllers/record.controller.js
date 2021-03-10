const httpStatus = require('http-status');
const Company = require('../models/company.model');
const {recordService } = require('../services');
const {companyService } = require('../services');
const createNewRecord = async (req, res) => {
  const {University_Name,
    companyName,
    careerUrl,
    Job_Start_Date,
    Job_Title,
    Graduation_Year,
    Specialization } = req.body;
  const recordInput ={
    University_Name,
    Job_Start_Date,
    Job_Title,
    Graduation_Year,
    Specialization
  }
  const compInput={
    companyName,
    careerUrl,
  }

  const id1 = await Company.exists({companyName:companyName})
  if(id1){
    // console.log(id1 +"---------------------------------id1")
    const comp = (await Company.findOne({companyName})).populate('_id')
    // console.log("______comp"+ comp)
    const s = {company: comp._id, ...recordInput}
  const rec = await recordService.createNewRecord(s)
  res.status(httpStatus.CREATED).send(rec);

  }else{
    const comp = await companyService.createNewCompany(compInput); 
    const s = {company: comp._id, ...recordInput}
  const rec = await recordService.createNewRecord(s)
  res.status(httpStatus.CREATED).send(rec);

  }
};

const getAllRecords = async(req,res)=>{
  const getRec = await recordService.getAllRecords();
  res.status(httpStatus.CREATED).send(getRec);
}

const deleteTheRecord = async(req,res)=>{
  const {id} = req.query;
  // console.log(id +"id to delete");
  const getRec = await recordService.deleteTheRecord(id);
  res.status(httpStatus.CREATED).send(getRec);
}
const recordIsPatch = async(req,res)=>{
  const upd = req.body;
  const rec = await recordService.recordIsPatch(upd);
  res.status(httpStatus.CREATED).send(rec);
}
const replaceExisting = async(req,res)=>{
  const rep = req.body;
  const rec = await recordService.replaceExisting(rep);
  res.status(httpStatus.CREATED).send(rec);
}
module.exports = {
    createNewRecord,
    getAllRecords,
    deleteTheRecord,
    recordIsPatch,
    replaceExisting
};