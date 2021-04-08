import React from 'react';
import { Component } from 'react';

class Panel extends Component {

    componentDidMount = () => {
        console.log(typeof (localStorage.getItem("username")));
        if (typeof (localStorage.getItem("username")) != 'string') {
            window.location.replace("/Login");
        }
    }

    render = () => {
        return (
            <div className="container">
                <div align="center" className="row">
                    <div className="col-3 col-sm-3 col-lg-3">
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
                    </div>
                    <div className="col-3 col-sm-3 col-lg-3">
                        <div id="panel" className="card">
                            <div class="card-body">
                                <h1 class="card-title"><i className="fas fa-recycle"></i></h1>
                                <h5>Reset Database</h5>
                            </div>
                            <hr />
                            <div className="card-body only-desktop">
                                <p>Change the path to the results folder of the racing trim server</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-3">
                        <div id="panel" className="card">
                            <div class="card-body">
                                <h1 class="card-title"><i class="fas fa-exclamation"></i></h1>
                                <h5>Report a problem</h5>
                            </div>
                            <hr />
                            <div class="card-body only-desktop">
                                <p>Use this feature to help develop the tracker</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-3">
                        <div id="panel" className="card">
                            <div class="card-body">
                                <h1 class="card-title"><i className="fas fa-folder-plus"></i></h1>
                                <h5>Edit your results folder path</h5>
                            </div>
                            <hr />
                            <div class="card-body only-desktop">
                                <p>Change the path to the results folder of the racing trim server</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panelfoot-container" align="center">
                    <button><i className="fa fa-home"></i></button>
                </div>
            </div>
        );
    }
}

export default Panel;