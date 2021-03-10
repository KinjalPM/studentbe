const express = require('express');
const companyController = require('../../controllers/company.controller');

const router = express.Router();

router.post('/createnewcompany', companyController.createNewCompany);
router.get(`/companieByName`,companyController.getAllCompaniesByID);
router.get('/getallcompany',companyController.getAllCompany);
router.delete('/deleteById',companyController.deleteByID);
router.patch('/updatethecompany',companyController.updatethecomp);
 router.put('/updateonesremain',companyController.updateonesremain);

module.exports = router;

