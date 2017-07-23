const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const database = require('../config/database');

// User schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUserByEmail = (email, callback) => {
    const query = {email: email};
    User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                throw err;
            } else {
                newUser.password = hash;
                newUser.save(callback)
            }
        });
    });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
};