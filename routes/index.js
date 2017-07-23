const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const database = require('../config/database');

const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) => {

    let newUser = new User({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'})
        } else {
            res.json({success:true, msg:'Successfully registered user'})
        }
    });
});

router.get('/login', (req, res, next) => {
    res.send("Login");
});

router.post('/authenticate', (req, res, next) => {
   const username = req.body.username;
   const password = req.body.password;

   //check for user by username in db
   User.getUserByUsername(username, (err, user) => {
       if(err) throw err;
       if(!user){ //if there is no such user
           return res.json({success: false, msg: 'User not found'});
       }

       //if user is found check for password
       User.comparePassword(password, user.password, (err, isMatch) => {
           if(err) throw err;
           if(isMatch) {//if its good make token
               const token = jwt.sign(user, database.secret, {
                   expiresIn: 604800 //1 week
               });
               res.json({success: true, token: 'JWT ' + token,
                   user: {
                       id: user._id,
                       name: user.name,
                       username: user.username,
                       email: user.email
                   }
               });
           } else { //if its wrong
               return res.json({success: false, msg: 'Wrong password'});
           }
       });
   });
});

module.exports = router;
