import React, { Component } from 'react'
import jwt_decode from "jwt-decode";

import { AuthContext } from "../../../context/authContext";
import NavBar from "../../NavBar/NavBar";
import * as API from '../../../util/api';


export class Login extends Component {
    static contextType = AuthContext;

    state={
        email:'',
        password:'',
        errors: []
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password);
        var newState = Object.assign({}, this.state);
        newState.errors = [];

        if (email === "" || password === "") {
            newState.errors.push("Please Fill out all fields. ");
        }
        else {
            API.loginUser({
                email,
                password
            }).then((result) => {
                console.log(result);
                if (result.status === 200) {
                    const { setUser, setTokens, setAuthToken } = this.context;
                    const { token } = result.data;
                    const decoded = jwt_decode(token);
                    setUser(decoded)
                    setTokens(token)
                    setAuthToken(token)
                    this.setState((prevState) => {
                    return { userID: decoded.id, email: decoded.email, isAuthenticated: true };
                    })
                    this.props.history.push('/events');
                }

            }).catch((errors) => {
                console.log(errors);
            })
        }

    }
    render() {
        return (
            <div>   
                <NavBar/>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h3>Meet&Clean Login</h3>
                        <div>   
                            <form onSubmit={this.handleSubmit}> 
                                <div>
                                    <input type='email' name='email' placeholder='Email...' required onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <input type='password' name='password' placeholder='Password' required onChange={this.handleChange}/>
                                </div>

                                <div className="login">
                                            <button class="float-left submit-button" >Login</button>
                                    <small>Don't have an account? Click here to register</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Login