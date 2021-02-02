const express = require('express');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database('public/sqlite/time.db');
const app = express();

let directoryPath;
let info;

exports.run = function () {
    readJson();
    setInterval(readJson, 2000);
    console.log("----------------------------------------------------------------------------------------------------------------------------------");
    console.log("||Welcome to VTracker||");
    console.log("To access the webapp, use 'your_ip' or 'localhost'");
    console.log("This is a BETA VERSION. Advice and criticisms that lead to a good development of the application are welcome");
    console.log("REMEMBER!! START FIRST ACC SERVER AND ALLOW RESULTS FUNCTION. FOR MORE, VISIT: https://www.acc-wiki.info/wiki/Server_Configuration#Result_Files");
    console.log("----------------------------------------------------------------------------------------------------------------------------------");
    inizio();
    setInterval(inizio, 2000);
}

exports.getInfoValue = () => {
    if(info === undefined) {
        return ["_server", "_track"];
    }
    return [info.serverName, info.trackName];
}

exports.updateConfig = (newPath) => {
    console.log(newPath)
    let config = {
        path: newPath
    }
    let data = JSON.stringify(config);
    fs.writeFileSync("config.json", data);
}

exports.deleteDB = () => {
    db.run(`DELETE FROM Piloti` , (err) => {
        if(err) throw err;
    } ) ;
}

readJson = () => {
    let directory = JSON.parse(fs.readFileSync('config.json'));
    directoryPath = directory.path + "\\";
    directoryPath.toString();
}

inizio = () => {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        if (files.length == 0) {
            console.log("----------------------------------------------------------------------------------------------------------------------------------");
            return console.log("Server not turned on or results feature not activated.Files not founded");
        }
        files.forEach(function (file) {
            // Leggi file
            info = applicazione(file);
        });
    });
}

applicazione = (fileName) => {
    let file = fs.readFileSync(directoryPath + "\\" + fileName)
    obj = (file.toString())
    obj = obj.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    obj = obj.replace(/[\u0000-\u0019]+/g, "");
    obj = JSON.parse(obj);

    let i = 0;
    while (obj.sessionResult.leaderBoardLines[i] != undefined) {
        let pilota = obj.sessionResult.leaderBoardLines[i];
        let nome = pilota.currentDriver["firstName"];
        let cognome = pilota.currentDriver["lastName"];
        let idmacchina = pilota.car["carId"];
        let idmodello = pilota.car["carModel"];
        let secondi = cercaTempoMigliore(idmacchina);
        let tempo = calcolaMinuti(secondi);
        let settori = cercaSettoriMigliori(idmacchina, secondi);
        if (tempo !== "0.000") {
            let settore1 = calcolaMinuti(settori[0]);
            let settore2 = calcolaMinuti(settori[1]);
            let settore3 = calcolaMinuti(settori[2]);
            let track = obj.trackName;
            let stringa = nome + ";" + cognome + ";" + tempo + ";" + track
            db.run(`INSERT INTO Piloti(nome,cognome,tempo,team,checkDuplicato,settore1,settore2,settore3) VALUES(?,?,?,?,?,?,?,?)`, [nome, cognome, tempo, idmodello, stringa, settore1, settore2, settore3], (err) => {
            });
        }
        i++;
    }
    return obj
}


cercaTempoMigliore = (idmacchina, secondi) => {
    let i = 0;
    let tempoMigliore = 999999;
    while (obj.laps[i] != undefined) {
        if (idmacchina === obj.laps[i].carId) {
            if (obj.laps[i].isValidForBest === true) {
                if (obj.laps[i].laptime < tempoMigliore) {
                    tempoMigliore = obj.laps[i].laptime;
                }
            }
        }
        i++
    }
    if (tempoMigliore === 999999) {
        tempoMigliore = 0;
    }
    return tempoMigliore;
}

cercaSettoriMigliori = (idmacchina, settori) => {
    let i = 0;
    let set = [];
    while (obj.laps[i] != undefined) {
        if (idmacchina === obj.laps[i].carId) {
            if (obj.laps[i].isValidForBest === true) {
                if (obj.laps[i].laptime === settori) {
                    set = obj.laps[i].splits
                }
            }
        }
        i++
    }
    return set;
}

calcolaMinuti = (secondi) => {
    let durata = secondi / 1000;
    durata = durata % (3600);

    let minuti = parseInt(durata / 60);
    durata = durata % (3600);
    if (minuti == 1) {
        secondi = durata - (60 * minuti);
    }else {
        secondi = durata;
    }
    secondi = secondi.toFixed(3);
    let tot;
    if (minuti == 0) {
        tot = secondi;
    } else {
        tot = minuti + ":" + secondi;
    }
    return tot;
}
