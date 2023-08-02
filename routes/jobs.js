const express = require("express");
const router = express.Router();

//import functions from controllers folder, jobs.js
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require("../controllers/jobs");

//set up routes using controllers functions
///:id - route parameter
router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

//export for app.js
module.exports = router;
