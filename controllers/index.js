const router = require("express").Router();


const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

// router.use("/", homeRoutes);
// put in own route
// router.get("/", (req, res) => {
//   res.render("login", { loggedIn: false });
// });

router.use('/', homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;