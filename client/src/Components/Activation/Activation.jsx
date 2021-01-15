import React, { Component } from 'react';
import axios from 'axios';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];

class Activation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            status: ''
        }
    }

    componentDidMount() {
        axios.get(`http://${ip}:9000/Activation`, {
            request: "Key"
        }).then((res) => {
            (res.data === "Activated" ? window.location.replace("/Intro") : console.log("Not activated"));
        });
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios.post(`http://${ip}:9000/Activation`, {
            key: this.state.key
        }).then((res) => {
            console.log(res.data);
            if (res.data === true) {
                window.location.replace("/Intro");
            } else {
                this.setState({ status: "Chiave errata. Riprovare" });
            }
        })
    }

    render() {
        return (
            <section>
                <div className="w3-animate-top">
                    <div className="standard-container">
                        <i class="fas fa-key display-4"></i>
                        <h5>Attivazione prodotto</h5>
                    </div>
                    <div className="basic-container">
                        <p>Il Vtracker offre un servizio a pagamento. Per continuare, inserisci la tua chiave di accesso ricevuta all'acquisto</p>
                        <form onSubmit={this.submitHandle} method="post">
                            <input onChange={this.changeHandler} type="text" name="key" id="key" placeholder="La tua chiave..." value={this.state.key} />
                            <input type="submit" value="Invio" />
                            <p style={{ color: "red" }}>{this.state.status}</p>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Activation
