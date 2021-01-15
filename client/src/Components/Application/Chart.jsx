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
            path: ''
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
            <div>
                <h5>ciao {this.path}</h5>
            </div>
        )
    }

}

export default Chart