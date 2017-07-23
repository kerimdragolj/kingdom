const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
const index = require('./routes/index');
const user = require('./routes/user');

//connect to database
mongoose.connect(config.database);
//on success
mongoose.connection.on('connected', () => {
  console.log("connected to db " + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
  console.log('Database connection error: ' + err);
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//logger middleware
app.use(logger('dev'));
//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cookie middleware
app.use(cookieParser());
//cors middleware
app.use(cors());
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//set static folder "public"
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler for in production
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
