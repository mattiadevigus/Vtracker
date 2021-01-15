import React, { Component } from 'react';
import Presentation from './Presentation'
import PresentationTwo from './PresentationTwo'
import PresentationTree from './PresentationTree'
import axios from 'axios';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];


class Intro extends Component {

    componentDidMount() {
        axios.get(`http://${ip}:9000/Activation`, {
            request: "Key"
        }).then((res) => {
            (res.data === "Activated" ? console.log("Activated") : window.location.replace("/Activation"));
        });
    }

    render() {
        return (<div>
            <Presentation />
            <PresentationTwo />
            <PresentationTree />
        </div>)
    }
}

export default Intro;