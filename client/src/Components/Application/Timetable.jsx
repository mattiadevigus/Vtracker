import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Base from '../../Modules/Base'

class Timetable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timetable: [],
            server: "Server",
            track: "Track"
        };
    }

    componentDidMount() {
        axios.post(`http://${Base.getIp()}:${Base.getPort()}/App`, {
            request: 'tutto ok'
        }).then((res) => {
            this.setState({ timetable: res.data.rows, server: res.data.server, track: Base.getFormattedTrackName(res.data.track) });
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
            } else {
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
                        <div className="col-6 col-md-6 col-lg-8">
                            <h3 id="serverName" className="data"><i className="fas fa-server"></i> <span id="titleState"> Server: </span> <span id="stateText">{this.state.server}</span></h3>
                            <h3 id="track" className="data"><i className="fas fa-road"></i> <span id="titleState"> Track: </span> <span id="stateText">{this.state.track}</span></h3>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2 align-self-center">
                        </div>
                        <div align="center" className="col-6 col-md-2 col-lg-1 align-self-center">
                            <Link to="/">
                                <button className="button-nav"><i style={{ fontSize: "2rem" }} className="fas fa-home button-fix"></i></button>
                            </Link>
                        </div>
                        <div align="center" className="col-6 col-md-2 col-lg-1 align-self-center">
                            <Link to="/Login">
                                <button className="button-nav"><i style={{ fontSize: "2rem" }} className="fas fa-user button-fix"></i></button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
                <div id="data-Container">
                    <table id="data-table">
                        <thead id="dataHeader">
                            <tr className="rowHeader">
                                <th id="posHeader" className="colHeader dataTableCell sticky-col first-col">#</th>
                                <th id="lastNameHeader" className="colHeader dataTableCell">Driver</th>
                                <th id="teamHeader" className="colHeader dataTableCell">Car Model</th>
                                <th id="sec1Header" className="colHeader dataTableCell">S1</th>
                                <th id="sec2Header" className="colHeader dataTableCell">S2</th>
                                <th id="sec3Header" className="colHeader dataTableCell">S3</th>
                                <th id="timeHeader" className="colHeader dataTableCell">Time</th>
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
                                            <td className="colN dataTableCell team"><img src={time.immagine} alt="car" /></td>
                                            <td className="colN dataTableCell sec1">{time.settore1}</td>
                                            <td className="colN dataTableCell sec2">{time.settore2}</td>
                                            <td className="colN dataTableCell sec3">{time.settore3}</td>
                                            <td className="colN dataTableCell time">{time.tempo}</td>
                                            <td className="colN dataTableCell gap">{this.calculateGap(i)}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}

export default Timetable;

