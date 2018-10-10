var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testCSSRouter = require('./routes/testCSS');
var testCSS2Router = require('./routes/testCSS2');
var gridRouter = require('./routes/grid');
var mediaQuery = require('./routes/mediaQuery');
var testScrollRouter = require('./routes/testScroll');
var uploadRouter = require('./routes/upload');
var loginRouter = require('./routes/login');
var signUpRouter = require('./routes/signUp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testCSS',testCSSRouter);
app.use('/testCSS2',testCSS2Router);
app.use('/grid',gridRouter);
app.use('/mediaQuery',mediaQuery);
app.use('/testScroll',testScrollRouter);
app.use('/upload',uploadRouter);
app.use('/login',loginRouter);
app.use('/signUp',signUpRouter);

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
