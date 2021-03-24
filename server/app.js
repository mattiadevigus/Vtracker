const http = require('http');
const express = require('express');
const fs = require('fs')
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const task = require('./modules/tasks');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('public/sqlite/time.db');
const app = express();

task.run();
task.readOpen();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(cookieParser());
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
  });
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
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

const server = http.createServer(app);
server.listen(task.getPort());
