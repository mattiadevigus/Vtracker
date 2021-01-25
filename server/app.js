const createError = require('http-errors');
const express = require('express');
const fs = require('fs')
const path = require('path');
const logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const task = require('./modules/tasks');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('public/sqlite/time.db');
const login = require('./modules/login');
const indexRouter = require('./routes/index');
const app = express();

/* Avvio server */
task.run();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true,
}))
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.post('/', function (req, res) {
  task.updateConfig(req.body.path)
  res.send("Tutto ok");
});

app.get('/Chart/:id', function (req, res) {
  console.log(req.params.id);
  let sql = `SELECT * FROM (SELECT *, min(tempo) as tempo FROM Tabella GROUP BY nome,cognome ORDER BY tempo ASC LIMIT 1) UNION SELECT * FROM(SELECT *, min(tempo) as tempo FROM Tabella WHERE id = ${req.params.id}  GROUP BY nome,cognome ORDER BY tempo ASC)`;
  db.all(sql, (err, driver) => {
    if (err) {
      throw err;
    }
    res.send(driver);
  }
  );
});

app.post('/App', function (req, res) {
  console.log(req.body);
  let sql = `SELECT *, min(tempo) as tempo FROM Tabella GROUP BY nome,cognome ORDER BY tempo ASC`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    let info = task.getInfoValue();
    let server = info[0];
    let track = info[1];
    res.send({ rows, server, track });
  });
});

app.post('/Login', async function (req, res) {
  console.log(req.body);
  const v = await login.assignSession(req.body);
  if (v === 1) {
    res.send(true);
  } else {
    res.send(false)
  };
});

app.get('/Activation', (req, res) => {
  console.log(req.session);
})

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
