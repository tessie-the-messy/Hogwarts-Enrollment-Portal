const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Student, House } = require("../../models");
const bcrypt = require("bcrypt");

// CREATE newStudent
router.post("/", async (req, res) => {
  try {
    const randomHouse = await House.findOne({
      order: [sequelize.fn("rand")],
    });
    const dbStudentData = await Student.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      house_id: randomHouse.id,
      teacher_id: 1,
    });
    //create function to assign correct teacher id for appropriate house (or make it random if we run out of time)

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.student = dbStudentData;
      res.render("landingpage", {
        loggedIn: true,
        student: dbStudentData.get({
          plain: true,
        }),
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const dbStudentData = await Student.findOne({
      where: {
        email: req.body.email,
      },
    });
    // Error if email is wrong
    if (!dbStudentData) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, dbStudentData.password);
    // dbStudentData.checkPassword(req.body.password);
    // Error if password is wrong
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save((err) => {
      if (err) throw err;
      req.session.loggedIn = true;
      req.session.student = dbStudentData;
      console.log(
        dbStudentData.get({
          plain: true,
        })
      );
      // res.status(200).json(dbStudentData);
      // res.json({
      //   loggedIn: true,
      //   student: dbStudentData,
      //   message: "You are now logged in!",
      // });
      res.render("landingpage", {
        loggedIn: true,
        student: dbStudentData.get({
          plain: true,
        }),
      });
    });

    // res.render("landingpage", { dbStudentData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  console.log("============");
  console.log("============");
  console.log(req.session);
  console.log("============");
  console.log("============");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
