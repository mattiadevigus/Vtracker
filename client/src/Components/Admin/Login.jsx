import { Component } from 'react';
import axios from 'axios';
import Base from '../../Modules/Base'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios
            .post(`http://${Base.getIp()}:9000/Login`, this.state)
            .then((res) => {
                if (res.data === true) {
                    localStorage.setItem('username', this.state.username);
                    window.location.replace("/Panel");
                } else {
                    this.setState({ error: "Wrong credentials. Try again" })
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="form-container w3-animate-zoom">
                <img className="logo" src="images/v_logo.png" alt="Logo" />
                <hr />
                <form method="post" onSubmit={this.submitHandle}>
                    <label htmlFor="quest1">Username:</label>
                    <input type="text" name="username" id="username" placeholder="yourusername..." value={this.state.username} onChange={this.changeHandler} />
                    <label htmlFor="quest2">Password:</label>
                    <input type="password" name="password" id="password" placeholder="yourpassword..." value={this.state.password} onChange={this.changeHandler} />
                    <p className="red">{this.state.error}</p>
                    <hr />
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default Login