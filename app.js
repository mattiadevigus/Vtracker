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
const app = express();

/* Avvio server */
task.run();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));



app.post('/', function (req, res) {
  task.updateConfig(req.body.path)
  res.send("Tutto ok");
});

app.get('/Chart/:id', function (req, res) {
  let sql = `SELECT * FROM (SELECT *, min(tempo) as tempo FROM Piloti GROUP BY nome,cognome ORDER BY tempo ASC LIMIT 1) UNION SELECT * FROM(SELECT *, min(tempo) as tempo FROM Piloti WHERE id = ${req.params.id}  GROUP BY nome,cognome ORDER BY tempo ASC)`;
  db.all(sql, (err, driver) => {
    if (err) {
      throw err;
    }
    res.send(driver);
  }
  );
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.post('/Login', async (req, res) => {
  const v = await login.assignSession(req.body);
  if (v === 1) {
    res.send(true);
  } else {
    res.send(false)
  };
});

app.post('/App', function (req, res) {
  let sql = `SELECT *, min(tempo) as tempo FROM Piloti INNER JOIN Macchine ON team = mch_id GROUP BY nome,cognome ORDER BY tempo ASC`;
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

app.post('/Delete' , (req,res) => {
  task.deleteDB();
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
