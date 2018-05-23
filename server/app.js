var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongoose = require('mongoose')
require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo')

var app = express();
mongoose.connect("mongodb://todofancy:todofancy@ds233500.mlab.com:33500/todofancy")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use(cors())
app.use('/', usersRouter);
app.use('/task',todoRouter)


module.exports = app;
