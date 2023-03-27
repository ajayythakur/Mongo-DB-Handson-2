const express = require('express');
const employeeData = require("../controller/employee");

const router = express.Router();

router.post("/empdata", employeeData.employeeDetails)
router.get(("/find"), employeeData.allDocuments);
router.get("/salaryquery", employeeData.salaryQuery)
router.get("/exp", employeeData.expQuery);
router.get("/gradexp", employeeData.grad_expQuery);
router.get("/dlt_query", employeeData.dltQuery);

module.exports = router;