const router = require("express").Router();
const { House, Roster, Student, Subject, Teacher } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

// If logged in, skip login page, go straight to home page
// GET homepage/landingpage
router.get("/landingpage", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      console.log("this is our console log");
      console.log(req.session, "oh god, is this the right one?");
      res.render("landingpage", {
        loggedIn: req.session.loggedIn,
        student: req.session.student,
      });
    } else {
      console.log(req.session);
      res.redirect("/");
      // res.render("login", {
      //   loggedIn: req.session.loggedIn,
      // });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET
router.get("/studentprofile/:id", async (req, res) => {
  console.log(req.session);
  try {
    const studentData = await Student.findByPk(req.params.id, { include: [House, Teacher] });
    const students = studentData.get({ plain: true });
    console.log(students);

    res.render("studentprofile", {
      students,
      loggedIn: req.session.loggedIn,
      student: req.session.student,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET schedule

router.get("/schedule", (req, res) => {
  console.log(req.session);

  res.render("schedule", {
    loggedIn: req.session.loggedIn,
    student: req.session.student,
  });
});

// If the user is not logged in, redirect the user to the login page

// If the user is logged in, allow them to view the pages

// GET student profile
// the house name, image, and description should change based upon what house the student is assigned to

// GET schedule

module.exports = router;
