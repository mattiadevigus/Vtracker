const express = require('express');
const session = require('express-session');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const { use } = require('../routes');
const app = express();

exports.createSession = () => {
    app.use(session({
        secret: 'secret',
        resave: 'true',
        saveUninitialized: true
    }))

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}

exports.assignSession = async (params) => {
    const conn = await mysql.createConnection({host: 'localhost',user: 'root', database: "Vtracker"});
    let [rows, fields] = await conn.execute(`SELECT * FROM v_users WHERE usr_email="${params.email}" AND usr_pass = "${params.password}"`);
    console.log(rows);
    return rows;
}

