const router = require("express").Router();

const { application } = require("express");
const apiRoutes = require("./api");
// const homeRoutes = require("./home-routes.js");

// router.use("/", homeRoutes);
router.get("/", (req, res) => {
  res.render("login", { loggedIn: false });
});
router.use("/api", apiRoutes);

module.exports = router;
