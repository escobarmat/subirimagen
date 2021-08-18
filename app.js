var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var dotenv = require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imagenRouter = require('./routes/fotos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) =>{
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({storage,limits:{fileSize: 5000000},
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"&& ext !== ".gif") {
      cb(new Error("El Formato no es Compatible"), false);
      return;
    }
    cb(null, true);
  }}).single('image'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fotos',imagenRouter);

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
