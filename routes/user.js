const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


/* GET users listing. */

//user profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

//user projects
router.get('/projects', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.send('user projects');
});

router.post('/edit', passport.authenticate('jwt', {session:false}), (req, res, next) => {
   res.send('');
});

module.exports = router;
