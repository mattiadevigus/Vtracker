import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Base from '../../../Modules/Base';

class Reset extends Component {

    componentDidMount = () => {
        Base.checkLogin();
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios
            .post(`http://${Base.getIp()}:${Base.getPort()}/Reset`, true);
        window.location.replace("/Path");
    }

    render = () => {
        return(
            <div>
                <div className="form-container w3-animate-zoom">
                <form align="center" method="post" onSubmit={this.submitHandle}>
                    <h1><i className="fas fa-trash-alt text-danger"></i></h1>
                    <h4>Reset Database</h4>
                    <hr />
                    <div className="container">
                    <p>Going forward, you will delete all the times saved on the database that will lead to the resetting of the timetable. To avoid rereading the same times, you will also have to delete them in the results folder of the AC server</p>
                    <hr />
                    </div>
                    <div className="row">
                        <div align="right" className="col">
                            <input className="btn bg-danger buttonform" type="submit" value="Continue" />
                        </div>
                        <div align="left" className="col">
                            <Link to="/Panel">
                                <input className="btn bg-light buttonform" type="submit" value="Go back" />
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default Reset;