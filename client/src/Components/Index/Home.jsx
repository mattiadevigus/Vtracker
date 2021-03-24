import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="home-container">
            <div className="w3-animate-zoom ">
                <div className="standard-container">
                    <img src="images/v_icon.png" alt="" />
                    <h3>Vtracker</h3>
                    <p className="created-by">Created by Mattia Devigus</p>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <div align="center" className="button-container">
                            <Link to="/App" >
                                <button className="app-button">
                                    <i className="fas fa-play display-4"></i>
                                    <h4>Run Vtracker</h4>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feed-container w3-animate-opacity" align="center">
                <h5>Leave a release on <a href="https://www.racedepartment.com/downloads/vtracker-timetable-for-acc-servers.40161/">RaceDepartment</a></h5>
            </div>
        </div>
    )
}

export default Navigation;