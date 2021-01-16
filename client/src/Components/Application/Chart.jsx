import axios from 'axios';
import React, { Component } from 'react';
import ChartJS from 'chart.js';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];

let link;

function createChart() {
    let ctx = document.getElementById('info').getContext('2d');
    let mychart = new ChartJS(ctx, {
        type: 'line',
    data: {
        labels: ['Start', 'S1' , 'S2' , 'S3'],
        datasets: [{
            data: [0.000, 31.532, 22.111, 24.900],
            backgroundColor: [
                'rgba(235, 64, 52, 0)',
            ],
            pointBackgroundColor: [
                'rgba(255, 255, 255, 1)',
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
            ],
            borderWidth: 3
        },
        {
            data: [0.000,32.732, 22.011, 24.900],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 3
        },
    ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines: {
                    color: 'rgba(255,255,255,.2)'
                  },
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines: {
                    color: 'rgba(255,255,255,.2)'
                  },
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        
    }
    })
}

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "_NAME",
            first: "_FIRST"
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

        createChart();
    }

    render() {
        return (
            <div align="center" className="container">
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
                                    <hr />
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
                            <div className="col-lg-6">
                                <div className="chart-info-container">
                                    <h4>NOME PILOTA : {this.state.first}</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <h5 className="red">S1: _TIME</h5>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <h5 className="red">S2: _TIME</h5>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <h5 className="red">S3: _TIME</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="purple">TIME: _TIME</h5>
                                        </div>
                                        <div className="col">
                                            <h5>GAP: _TIME</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="chart-graph-container">
                                    <canvas id="info" style={{zIndex:2}}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chart