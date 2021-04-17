import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Base from '../../../Modules/Base'

class Path extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: '',
        }
    }

    componentDidMount = () => {
        Base.checkLogin();
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios
            .post(`http://${Base.getIp()}:9000/Path`, this.state)
            .catch(err => {
                console.log(err);
            })
            .then((res) => {
                window.location.replace("/Panel");
            });
        
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render = () => {
        return (
            <div className="form-container w3-animate-zoom">
                <form align="center" method="post" onSubmit={this.submitHandle}>
                    <h1><i className="fas fa-cogs text-danger"></i></h1>
                    <h4>Results folder configuration</h4>
                    <hr />
                    <div className="form-group">
                        <label>Insert the result folder path</label>
                        <input
                            type="text"
                            name="path"
                            id="path"
                            value={this.state.path}
                            onChange={this.changeHandler}
                            placeholder="..."
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

export default Path;