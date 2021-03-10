const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);
router.get('/getallrecords',recordController.getAllRecords);
router.delete('/deletetherecords',recordController.deleteTheRecord);
router.patch('/updatetherecord',recordController.recordIsPatch);
router.put('/replaceExisting',recordController.replaceExisting);
module.exports = router;