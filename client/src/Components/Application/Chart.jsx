import axios from 'axios';
import React, { Component } from 'react';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];

let link;


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "MATTIVERS"
        };
    }


    componentDidMount() {
        link = window.location.href;
        let id = link.split("/");
        id = id[4];

        this.setState([this.path = id]);

        axios.get(`http://${ip}:9000/Chart/${id}`, {
            request: "Key"
        }).then((res) => {
            (res.data === "Activated" ? console.log("Activated") : window.location.replace("/Activation"));
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col">
                    <div className="presentation-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chart-info-container">
                                    <h4>NOME PILOTA : {this.state.name}</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <h5 className="red">S1: _TIME</h5>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5 className="red">S2: _TIME</h5>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5 className="red">S3: _TIME</h5>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="purple">TIME: _TIME</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <h5>GAP: _TIME</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6"><canvas id="gap" width="400" height="400"></canvas></div>
                            <div className="col-lg-6">TRY</div>
                            <div className="col-lg-6">TRY</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chart