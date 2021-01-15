import React from 'react';
import {Link} from 'react-router-dom';


const styleBefore = {
    display: 'none'
}

let link = window.location.hostname;

function PresentationTree(props) {

    return (
        <section id="presentationTree" style={styleBefore}>
            <div className="presentation-container w3-animate-right">
                <img style={{ width: "20%" }} src="./images/v_icon.png" alt="" />
                <h1>FINITO</h1>
                <br/>
                <Link to="/App" >
                <button>Avvia Vtracker <i className="fas fa-arrow-right"></i> </button>
                </Link>
                <div className="presentation-info">
                <hr/>
                <p>Potrai cambiare le impostazioni successivamente nell'apposita sezione</p>
                <hr/>
                <p>Link da inviare ai piloti: <b>http://{link}/App </b></p>
                <span style={{color:"red" , fontSize:"0.7rem"}}>Se il link contiene localhost, accedi al browser utilizzando l'ip del server</span>
                <hr/>
                </div> 
            </div>
        </section>)
}

export default PresentationTree;