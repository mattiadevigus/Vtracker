const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();


exports.createSession = () => {
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Vtracker'
    })

    app.use(session({
        secret: 'secret',
        resave: 'true',
        saveUninitialized: true
    }))

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}

exports.assignSession = () => {
    console.log("Creo...");
}

