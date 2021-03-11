const httpStatus = require('http-status');
const Company = require('../models/company.model');
const {recordService } = require('../services');
const {companyService } = require('../services');
const _ = require('lodash')
var faker = require('faker');
// ----------------------------------FAKER----------------------------------------------------------------------
const createNewFakeRecord = async(req,res)=>{
  // for(let i=0;i<58;i++){
  let compInput ={
    companyName:faker.company.companyName(),
    careerUrl:faker.internet.url(),
  }
  let recordInput ={
    University_Name:`university of ${faker.address.city()}`,
    Graduation_Year:faker.random.number(),
    Specialization :faker.commerce.department(),
    Job_Title:faker.name.jobTitle(),
    Job_Start_Date:faker.date.past()
  }

  const {companyName} = compInput.companyName
  const id1 = await Company.exists({companyName:companyName})
  if(id1){
 
    const comp = (await Company.findOne({companyName})).populate('_id')
    const s = {company: comp._id, ...recordInput}
  const rec = await recordService.createNewRecord(s)
  // console.log("----------------------------i "+i);
  // res.status(httpStatus.CREATED).send(rec);

  }else{
    const comp = await companyService.createNewCompany(compInput); 
    const s = {company: comp._id, ...recordInput}
  const rec = await recordService.createNewRecord(s)
  // console.log("----------------------------i "+i);
  // res.status(httpStatus.CREATED).send(rec);

  }
// }
};
// ------------------------------------------------------------------------------------------------------------
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
  let {limit}= req.query;
  const getRec = await recordService.getAllRecords(limit)
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

const recordbyname = async(req,res)=>{
  const {searchText} = req.query;
  const getrec = await recordService.recordbyname(searchText);
  const getcomp = await companyService.getAllCompaniesByID(searchText);
  console.log(getcomp);
  const accumulateIds =getcomp.map(i=>i._id)
  console.log(accumulateIds);
  const recsWithKw = await recordService.getRecordsByCompanyId(accumulateIds);
  const mergeRec=[...getrec,...recsWithKw]
  console.log(mergeRec,'mergeRec');
  const deDupValue= _.uniqBy(mergeRec,'_id');
  console.log(deDupValue,'deDupValue');
  res.status(httpStatus.CREATED).send(deDupValue);
}



module.exports = {
    createNewRecord,
    getAllRecords,
    deleteTheRecord,
    recordIsPatch,
    replaceExisting,
    createNewFakeRecord,
    recordbyname
};