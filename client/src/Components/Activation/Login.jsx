import react, {Component} from 'react';
import axios from 'axios';

let ipv4 = window.location.host
ipv4 = ipv4.split(":");
const ip = ipv4[0];

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : "",
            password: "",
            error: ""
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post(`http://${ip}:9000/Login`, this.state)
            .then((res) => {
                console.log(res.data);
                (res.data === true ? window.location.replace("/Intro") : this.setState({error : "E-mail o password errata. Riprovare"})
            )})
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return(
            <div className="form-container w3-animate-zoom">
                <img className="logo" src="images/v_logo.png" alt="Logo"/>
                <hr/>
                <form method="post" onSubmit={this.submitHandle}>
                    <label htmlFor="quest1">E-MAIL:</label>
                    <input type="email" name="email" id="email" placeholder="mario.rossi@example.com" value={this.state.email} onChange={this.changeHandler}/>
                    <label htmlFor="quest2">PASSWORD:</label>
                    <input type="password" name="password" id="password" placeholder="Password123" value={this.state.password} onChange={this.changeHandler}/>
                    <p className="red">{this.state.error}</p>
                    <hr/>
                    <button type="submit"><i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default Login