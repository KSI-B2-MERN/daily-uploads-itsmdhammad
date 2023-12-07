var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// for session and token.
// var session = require("express-session");
// var config = require("./config.json");

var authRouter =  require("./routes/authRouter");
var roleRouter = require("./routes/roleRouter");
var userRouter = require("./routes/userRouter");

// var productRouter = require("./routes/productRouter");


var app = express();

// var maxAge = 1000 * 60 * 60; // one hour
// app.use(
//   session({
//     secret: config.jwt.secret,
//     saveUninitialized: false,
//     cookie: { maxAge: maxAge },
//     resave: false,
//   })
// );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/role", roleRouter);
app.use("/user", userRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
