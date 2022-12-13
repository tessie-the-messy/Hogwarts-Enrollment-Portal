const router = require("express").Router();

const studentRoutes = require("./student-routes");

router.use("/students", studentRoutes);
module.exports = router;
