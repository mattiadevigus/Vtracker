import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {

    componentDidMount = () => {
        console.log(typeof (localStorage.getItem("username")));
        if (typeof (localStorage.getItem("username")) != 'string') {
            window.location.replace("/Login");
        }
    }

    render = () => {
        return (
            <div>
                <div align="center">
                    <img className="w3-animate-top" id="logo" src="/images/v_logo.png" alt="" />
                    <hr />
                </div>
                <div className="container">
                    <div align="center" className="row w3-animate-right">

                        <div className="col-6 col-sm-3 col-lg-3">
                            <Link id="link" to="/Path">
                                <div id="panel" className="card">
                                    <div class="card-body">
                                        <h1 class="card-title"><i className="fas fa-folder-plus"></i></h1>
                                        <h5>Edit your results folder path</h5>
                                    </div>
                                    <hr className="only-desktop" />
                                    <div className="card-body only-desktop">
                                        <p>Change the path to the results folder of the racing trim server</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-3">
                            <Link id="link" to="/Path">
                                <div id="panel" className="card">
                                    <div class="card-body">
                                        <h1 class="card-title"><i className="fas fa-recycle"></i></h1>
                                        <h5>Reset Database</h5>
                                    </div>
                                    <hr className="only-desktop" />
                                    <div className="card-body only-desktop">
                                        <p>Delete all times from the database (To avoid re-reading the same times, remove all files from the results folder)</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-3">
                            <Link id="link" to="/Path">
                                <div id="panel" className="card">
                                    <div class="card-body">
                                        <h1 class="card-title"><i className="fas fa-folder-plus"></i></h1>
                                        <h5>Change your credentials</h5>
                                    </div>
                                    <hr className="only-desktop" />
                                    <div class="card-body only-desktop">
                                        <p>Change your login credentials</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-3">
                        <Link id="link" to="/Path">
                            <div id="panel" className="card">
                                <div class="card-body">
                                    <h1 class="card-title"><i class="fas fa-exclamation"></i></h1>
                                    <h5>Report a problem</h5>
                                </div>
                                <hr className="only-desktop" />
                                <div class="card-body only-desktop">
                                    <p>Use this feature to help develop the tracker</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <div className="panelfoot-container" align="center">
                        <button><i className="fa fa-home"></i></button>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Panel;