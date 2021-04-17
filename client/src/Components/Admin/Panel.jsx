import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Base from "../../Modules/Base"

class Panel extends Component {

    componentDidMount = () => {
        Base.checkLogin();
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
                                    <div className="card-body">
                                        <h1 className="card-title"><i className="fas fa-folder-plus"></i></h1>
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
                            <Link id="link" to="/Reset">
                                <div id="panel" className="card">
                                    <div className="card-body">
                                        <h1 className="card-title"><i className="fas fa-recycle"></i></h1>
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
                            <Link id="link" to="/Credentials">
                                <div id="panel" className="card">
                                    <div className="card-body">
                                        <h1 className="card-title"><i className="fas fa-key"></i></h1>
                                        <h5>Change your credentials</h5>
                                    </div>
                                    <hr className="only-desktop" />
                                    <div className="card-body only-desktop">
                                        <p>Change your login credentials</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-3 col-lg-3">
                        <Link id="link" to="/Info">
                            <div id="panel" className="card">
                                <div className="card-body">
                                    <h1 className="card-title"><i className="fas fa-tools"></i></h1>
                                    <h5>Your settings</h5>
                                </div>
                                <hr className="only-desktop" />
                                <div className="card-body only-desktop">
                                    <p>Show more information about your configuration</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="/App">
                    <div className="panelfoot-container" align="center">
                        <button><i className="fa fa-home"></i></button>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Panel;