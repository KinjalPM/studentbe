const Company = require('../models/company.model'); 

const createNewCompany = async(r) => {
  const company = await Company.create(r)
  .catch(e=> console.log("creating error"+e))
  // console.log(company,'company from service ');
   return company;
};

const getAllCompaniesByID = async(name) =>{
  const getcomp = await Company.find({companyName: name})
 
  return getcomp;
}

const getAllCompany = async()=>{
  const getcomp = await Company.find();
  return getcomp;
}
const deleteByID = async(id)=>{
  // const del = await (await Company.findById(id))
  // .delete()
  // .then(console.log("Successful deleted"))
  // .catch(e=> console.log("error in delete"+  e))
  
  console.log(id +"id to delete");
  const del = await Company.findByIdAndDelete(id);
  return del;
}

const updatethecomp = async(upd) =>{
   const filter =  upd._id;
  // const update = upd;
  console.log("filter: "+ filter)
  const comp = await  Company.findById(filter).update(upd);
  return comp;
}

const updateonesremain = async(upd) =>{
  // const update = upd;
//  console.log("f: "+ id)
  const comp = await  Company.findById(upd._id).replaceOne(upd);
  // .catch(e=> console.log("error of put"+e));
  return comp;
}

module.exports = {
  createNewCompany,
  getAllCompaniesByID,
  getAllCompany,
  deleteByID,
  updatethecomp,
  updateonesremain 
  };