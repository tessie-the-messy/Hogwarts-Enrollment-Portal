const { router } = require("express").Router();
const { House, Roster, Student, Subject, Teacher} = require('../models')

// If logged in, skip login page, go straight to home page

// GET homepage/landingpage
router.get('/home', async (req, res) => {
// If the user is not logged in, redirect the user to the login page
    if (!req.session.) {

    }
})

    // If the user is logged in, allow them to view the pages

// GET student profile

// GET schedule