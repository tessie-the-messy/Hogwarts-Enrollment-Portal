const router = require("express").Router();
// const { House, Roster, Student, Subject, Teacher } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

// If logged in, skip login page, go straight to home page
// GET homepage/landingpage
router.get("/landingpage", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      console.log("this is our console log");

      res.render("landingpage", {
        loggedIn: req.session.loggedIn,
        student: req.session.student,
      });
    } else {
      console.log(req.session)
      res.redirect("/")
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
router.get("/studentprofile", (req, res) => {
  console.log(req.session);

  res.render("studentprofile", {
    loggedIn: req.session.loggedIn,
    student: req.session.student,
  });
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
