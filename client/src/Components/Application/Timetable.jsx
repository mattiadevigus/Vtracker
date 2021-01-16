import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];


class Timetable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timetable: [],
            server: "_server",
            track: "_name"
        };
    }

    componentDidMount() {
        axios.get(`http://${ip}:9000/Activation`, {
            request: "Key"
        }).then((res) => {
            (res.data === "Activated" ? console.log("true") : window.location.replace("/Activation"));
        });

        axios.post(`http://${ip}:9000/App`, {
            request: 'tutto ok'
        }).then((res) => {
            this.setState({ timetable: res.data.rows, server: res.data.server, track: res.data.track });
        });
    }

    calculateGap(i) {
        let gapTop = null;
        let t = this.state.timetable.map((dato, index) => {
            let tot;
            let gap = (Number(dato.settore1) + Number(dato.settore2) + Number(dato.settore3));
            if (gapTop === null) {
                gapTop = gap;
                gap = "-";
            }else{
                tot = gap - gapTop;
                gap = "+" + Number(tot).toFixed(3);
            }
            return gap
        })
        return t[i];
    }

    render() {
        return (
            <div className="w3-animate-zoom">
                <div id="headingData">
                    <img id="logo" src="images/v_logo.png" alt="logo" srcSet="images/v_logo.png" />
                    <hr />
                    <div className="row ">
                        <div className="col col-md-4 col-lg-4">
                            <h3 id="serverName" className="data"><span>Server: </span>{this.state.server}</h3>
                            <h4 id="track" className="data"><span>Pista: </span>{this.state.track}</h4>
                        </div>
                        <div className="col col-md-4 col-lg-6 align-self-center">
                        </div>
                        <div className="col col-md-4 col-lg-1 align-self-center">
                            <Link to="/">
                                <button className="button"><i style={{ fontSize: "2rem" }} className="fas fa-home button-fix"></i></button>
                            </Link>
                        </div>
                        <div className="col col-md-4 col-lg-1 align-self-center" align="right" >
                            <button className="button"><i style={{ fontSize: "2rem" }} className="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div id="data-Container">
                    <table id="data-table">
                        <thead id="dataHeader">
                            <tr  className="rowHeader">
                                <th id="posHeader" className="colHeader dataTableCell sticky-col first-col">#</th>
                                <th id="lastNameHeader" className="colHeader dataTableCell">Pilota</th>
                                <th id="teamHeader" className="colHeader dataTableCell">Modello macchina</th>
                                <th id="sec1Header" className="colHeader dataTableCell">S1</th>
                                <th id="sec2Header" className="colHeader dataTableCell">S2</th>
                                <th id="sec3Header" className="colHeader dataTableCell">S3</th>
                                <th id="timeHeader" className="colHeader dataTableCell">Tempo</th>
                                <th id="gapHeader" className="colHeader dataTableCell">Gap</th>
                            </tr>
                        </thead>

                        {
                            this.state.timetable.map((time, i) => {
                                const link = `/Chart/${time.id}`;
                                return (
                                    <tbody id="dataBody">
                                        <tr className="rowN">
                                            <td className="colN dataTableCell pos sticky-col first-col">{i + 1}</td>
                                            <td className="colN dataTableCell lastName"><Link to={link}> {time.nome}  {time.cognome}</Link></td>
                                            <td className="colN dataTableCell team">{time.team}</td>
                                            <td className="colN dataTableCell sec1">{time.settore1}</td>
                                            <td className="colN dataTableCell sec2">{time.settore2}</td>
                                            <td className="colN dataTableCell sec3">{time.settore3}</td>
                                            <td className="colN dataTableCell time">{time.tempo}</td>
                                            <td className="colN dataTableCell gap">{this.calculateGap(i)}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                    </table>
                </div>
            </div>)
    }
}

export default Timetable;

