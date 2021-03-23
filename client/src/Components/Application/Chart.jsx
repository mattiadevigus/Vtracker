import axios from 'axios';
import React, { Component } from 'react';
import ChartJS from 'chart.js';
import { Link } from 'react-router-dom';
import Base from '../../Modules/Base'

let link;

function createChart(driver, bestDriver) {
    let ctx = document.getElementById('info').getContext('2d');
    new ChartJS(ctx, {
        type: 'line',
        data: {
            labels: ['Start', 'S1', 'S2', 'S3'],
            datasets: [
                {
                    data: [0.000, bestDriver.settore1, bestDriver.settore2, bestDriver.settore3],
                    lineTension: 0,
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 3
                },
                {
                data: [0.000, driver.settore1, driver.settore2, driver.settore3],
                lineTension: 0,
                backgroundColor: [
                    'rgba(255, 255, 255, 0)',
                ],
                pointBackgroundColor: [
                    'rgba(255,0, 0, 1)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
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
                        beginAtZero: true
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,.2)'
                    },
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true
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
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            elements: {
                point:{
                    backgroundColor: "#fff"
                }
            }

        }
    })
}

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: [],
            bestDriver: [],
        };
    }


    componentDidMount() {
        link = window.location.href;
        let id = link.split("/");
        id = id[4];

        this.setState([this.path = id]);

        axios.get(`http://${Base.getIp()}:9000/Chart/${id}`, {
            request: "Info"
        }).then((res) => {
            let infoDriver;
            let infoFirst;

            if (Object.keys(res.data).length === 1) {
                infoDriver = res.data[0];
            } else {
                infoDriver = res.data[1];
            }
            infoFirst = res.data[0];
            this.setState({ driver: infoDriver, bestDriver: infoFirst });
            createChart(this.state.driver, this.state.bestDriver);
        });
    }

    render() {
        return (
            <div align="center" className="container">
                <div className="col">
                    <div className="presentation-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chart-info-container">
                                    <h4>Driver name: <span>{this.state.driver.nome} {this.state.driver.cognome}</span></h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <h5>{this.state.driver.settore1}</h5>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>{this.state.driver.settore2}</h5>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>{this.state.driver.settore3}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="purple">{this.state.driver.tempo}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <i className="fas fa-circle red"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 only-desktop">
                                <div className="chart-info-container">
                                    <h4>First driver name : {this.state.bestDriver.nome} {this.state.bestDriver.cognome}</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <h5>{this.state.bestDriver.settore1}</h5>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <h5>{this.state.bestDriver.settore2}</h5>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <h5>{this.state.bestDriver.settore3}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="purple">{this.state.bestDriver.tempo}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <i className="fas fa-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="chart-graph-container white-bg">
                                    <canvas id="info" style={{ zIndex: 2 }}></canvas>
                                </div>
                            </div>
                        </div>
                        <Link to="/App">
                            <button><i className="fa fa-home"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chart