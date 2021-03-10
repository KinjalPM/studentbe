
const httpStatus = require('http-status');
const Record = require('../models/record.model');
const {companyService, recordService } = require('../services');

const createNewCompany = async (req, res) => {
//  const {comp} =req.body
  const comp = await companyService.createNewCompany(req.body);
//   console.log(comp,'comp');
  res.status(httpStatus.CREATED).send(comp);
};

const getAllCompaniesByID= async (req, res) => {
    // console.log("Controller Invoked")
    const {name} = req.query;
    console.log(req.query+"name")
    const getcomp = await companyService.getAllCompaniesByID(name);
    // console.log(getcomp,'comp')
      res.status(httpStatus.CREATED).send(getcomp);
    };

const getAllCompany = async(req,res) =>{
    const getcomp = await companyService.getAllCompany();
    // console.log(getcomp,'comp')
    res.status(httpStatus.CREATED).send(getcomp);
}

const deleteByID = async(req,res) =>{
    const {id} = req.query;
    const getRec = await recordService.deleteManyRec(id);
    const getcomp = await companyService.deleteByID(id);
    res.status(httpStatus.CREATED).send(getcomp);
}

const updatethecomp = async(req,res)=>{
      
         const upd = req.body;
        console.log(upd);
       const comp = await companyService.updatethecomp(upd);
       res.status(httpStatus.CREATED).send(comp);
}

const updateonesremain = async(req,res)=>{
    // const {id} = req.query;
    const upd = req.body;
    //  console.log("id: "+ id);
    console.log(upd);
   const comp = await companyService.updateonesremain(constupd);
   res.status(httpStatus.CREATED).send(comp);
}
module.exports = {
  createNewCompany,
  getAllCompaniesByID,
  getAllCompany,
  deleteByID,
  updatethecomp,
  updateonesremain
};