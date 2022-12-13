const router = require("express").Router();
// const { House, Roster, Student, Subject, Teacher } = require("../models");

// If logged in, skip login page, go straight to home page

router.get("/", async (req, res) => {
  res.render("login");
});

// GET homepage/landingpage
router.get("/landingpage",  (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  console.log(req.session);

  res.render("landingpage", {
    loggedIn: req.session.loggedIn,
    student:req.session.student,
  });
});
//   if (!req.session.loggedIn) {
//     res.redirect("/");
//   }
//   // if the user is logged in, load home page w/ first and last name
//   try {
//     const dbStudentData = await Student.findOne({
//       where: {
//         email: req.body.email,
//       },
//       // include: [
//       //   {
//       //     model: Student,
//       //     attributes: ["first_name", "last_name"],
//       //   },
//       // ],
//     });
//     const student = dbStudentData.get({ plain: true });
//     console.log(student);
//     res.render("landingpage", { student, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// If the user is logged in, allow them to view the pages

// GET student profile
// the house name, image, and description should change based upon what house the student is assigned to

// GET schedule

module.exports = router;
