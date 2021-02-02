import React, { Component } from 'react';
import Presentation from './Presentation'
import PresentationTwo from './PresentationTwo'
import PresentationTree from './PresentationTree'

class Intro extends Component {

    componentDidMount() {
        console.log("Your email is: " + localStorage.getItem("email"));
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