class Timing {
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
                        console.log(set);
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
        if (minuti >= 1) {
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

    calcolaSecondiSettori = (secondi) => {
        return (secondi/1000).toFixed(3);
    }
}

module.exports = new Timing();
