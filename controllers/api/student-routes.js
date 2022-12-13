const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Student, House } = require("../../models");

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
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbStudentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    //     if (!req.session.loggedIn) {
    //   res.redirect('/login');
    // } else {
    const dbStudentData = await Student.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbStudentData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbStudentData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ student: dbStudentData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
