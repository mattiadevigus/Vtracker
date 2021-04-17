import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Base from './../../../Modules/Base'

class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: 'Not configured',
            port: 'Not configured',
            openBrowserOnStart: ''
        }
    }

    componentDidMount = () => {
        Base.checkLogin();
        axios
            .post(`http://${Base.getIp()}:${Base.getPort()}/Info`, {
                request: "requestInfo"
            }).then((res) => {
                console.log(res);
                if(res.data.path === "") res.data.path = "Not configured"; 
                this.setState({ path: res.data.path, port: res.data.port, openBrowserOnStart: res.data.openBrowserOnStart.toString() });
            })
    }

    render = () => {
        return (
            <div id="cardinfo" className="card w3-animate-zoom" align="center">
                <div className="card-title">
                    <h1><i className="fas fa-info"></i></h1>
                    <h5>Settings</h5>

                </div>
                <div className="card-body">
                    <hr />
                    <h5 title="This feature allows you to start the browser as soon as you start the executable. You can disable it from the config.json file"><span className="text-danger">Open on start: </span> {this.state.openBrowserOnStart}</h5>
                    <hr />
                    <h5><span className="text-danger">Port: </span> {this.state.port}</h5>
                    <hr />
                    <h5><span className="text-danger">Results folder: </span> <Link to="/Path"><u>{this.state.path}</u></Link></h5>
                    <hr />
                </div>
                <Link to="/Panel">
                    <p id="backbutton" className="btn"><i style={{ fontSize: "2rem" }} className="fas fa-arrow-left button-fix"></i></p>
                </Link>
            </div>
        )
    }
}

export default Info;