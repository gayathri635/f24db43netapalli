require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Chocolate = require('./models/chocolate');
const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString, {  useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log("Connected to MongoDB Atlas");
});

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chocolateRouter = require('./routes/Chocolate');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
const resourceRouter = require('./routes/resource'); 
// Seed function to populate chocolates data
async function recreateDB() {
  await Chocolate.deleteMany();

  let instance1 = new Chocolate({ chocolate_type: "Dark", flavor: "Mint", price: 2.5 });
  let instance2 = new Chocolate({ chocolate_type: "Milk", flavor: "Hazelnut", price: 3.0 });
  let instance3 = new Chocolate({ chocolate_type: "White", flavor: "Vanilla", price: 2.8 });

  instance1.save().then(doc => console.log("First chocolate saved:", doc)).catch(err => console.error(err));
  instance2.save().then(doc => console.log("Second chocolate saved:", doc)).catch(err => console.error(err));
  instance3.save().then(doc => console.log("Third chocolate saved:", doc)).catch(err => console.error(err));
}

// Seed data if necessary
let reseed = true;
if (reseed) { recreateDB(); }
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grid', gridRouter);
app.use('/Chocolate', chocolateRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

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
