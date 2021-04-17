import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Base from "../Pages/../../../Modules/Base"

class Credentials extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        } 
    }

    componentDidMount = () => {
        Base.checkLogin();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios
            .post(`http://${Base.getIp()}:${Base.getPort()}/Credentials`, this.state)
            .then((res) => {
                if(res.data === true) {
                    window.location.replace("/Panel");
                }
            })
    }

    render = () => {
        return(
            <div className="form-container w3-animate-zoom">
                <form align="center" method="post" onSubmit={this.submitHandle}>
                    <h1><i className="fas fa-cogs text-danger"></i></h1>
                    <h4>Account configuration</h4>
                    <hr />
                    <div className="form-group">
                        <label>Insert username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.changeHandler}
                            placeholder="newusername..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Insert password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            placeholder="newpassword..."
                            required
                        />
                    </div>
                    <hr />
                    <div className="row">
                        <div align="right" className="col">
                            <input className="btn bg-light buttonform" type="submit" value="Save" />
                        </div>
                        <div align="left" className="col">
                            <Link to="/Panel">
                                <input className="btn bg-light buttonform" type="submit" value="Go back" />
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Credentials;