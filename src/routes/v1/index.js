const express = require('express');
const recordRoute = require('./record.route');
const companyRoute = require('./company.route');
const router = express.Router();

router.use('/record',recordRoute)
router.use('/company',companyRoute)


module.exports = router;