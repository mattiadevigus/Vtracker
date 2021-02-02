import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="w3-animate-zoom home-container">
            <div className="standard-container">
                <img src="images/v_icon.png" alt="" />
                <h3>Vtracker</h3>
                <p className="created-by">Creato da Mattia Devigus</p>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <div align="center" className="button-container">
                        <Link to="/App" >
                            <button className="app-button">
                                <i className="fas fa-play display-4"></i>
                                <h4>Avvia il tracker</h4>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;