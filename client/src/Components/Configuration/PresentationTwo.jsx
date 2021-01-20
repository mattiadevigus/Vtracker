import React, { Component } from 'react';
import axios from 'axios';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];

const styleBefore = {
    display: 'none'
}

function prev() {
    document.getElementById('presentation').style.display = "flex";
    document.getElementById('presentationTwo').style.display = "none";
}

class PresentationTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: '',
        }
    }

    next = () => {
        if ('' !== this.state.path) {
            document.getElementById('presentationTree').style.display = "flex";
            document.getElementById('presentationTwo').style.display = "none";
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    submitHandle = (e) => {
        
        e.preventDefault();
        console.log(this.state)
        axios
            .post(`http://${ip}:9000`, this.state)
            .then((res) => console.log(res))
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { path } = this.state;
        return (
            <section id="presentationTwo" style={styleBefore} >
                <div className="presentation-container w3-animate-right">
                    <h1>INIZIAMO!</h1>
                    <hr />
                    <form method="post" onSubmit={this.submitHandle}>
                        <div className="row">
                            <label>Inserisci il percorso file della cartella Result del server</label>
                            <input
                                type="text"
                                name="path"
                                id="path"
                                value={path}
                                onChange={this.changeHandler}
                                placeholder="C:\SteamLibrary\steamapps\common\Assetto Corsa Competizione Dedicated Server\results"
                                required
                            />
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col col-sm-12 col-m-12 col-lg-6">
                                <button onClick={prev}><i className="fas fa-arrow-left"></i></button>
                            </div>
                            <div className="col col-sm-12 col-m-12 col-lg-6">
                                <button type="submit" onClick={this.next}><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>)
    }
}

export default PresentationTwo;