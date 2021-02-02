import React from 'react';
import Features from './Features'


function Presentation(props) {

    function next() {
        document.getElementById('presentation').style.display = "none";
        document.getElementById('presentationTwo').style.display = "flex";
    }

    return (
        <section id="presentation">
            <div className="presentation-container w3-animate-zoom">
                <img style={{ width: "5%" }} src="./images/v_icon.png" alt="" />
                <h1>BENVENUTO NEL VTRACKER</h1>
                <hr />
                <div className="only-desktop">
                    <p>Il Vtracker è un software realizzato per consentire il tracciamento dei tempi per un server di Assetto Corsa Competizione.</p> <p> Grazie al Vtracker, puoi tenere sott'occhio importanti informazioni utili per organizzare eventi. Alcune di queste, rendono possibile il monitoraggio di un Time Attack o Prequalifica. </p> <p> Può essere utilizzato anche per confrontarti con i tuoi amici in ambito privato</p><p>Per proseguire, inizia la configurazione del tracker</p>
                </div>
                <hr className="only-desktop" />
                <div className="row">
                    <Features icon="fas fa-hourglass-half" title="Visualizza i tempi di un server" />
                    <Features icon="fas fa-users" title="Informazioni aggiuntive piloti" />
                    <Features icon="fas fa-chart-bar" title="Grafici iterattivi" />
                </div>
                <hr />
                <div className="button-container">
                <button onClick={next}><i className="fas fa-arrow-right"></i> </button>
                </div>
            </div>
        </section>)
}

export default Presentation;