import { Component } from "react";
import axios from 'axios';
// import { useHistory, Redirect } from 'react-router-dom'

class Register extends Component {

    state = {
        username:"",
        email:"",
        password:"",
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', this.state)
            .then((response) => {
                console.log(response)
                alert("User Registered!! Redirecting to Login Page!!")
                window.location.assign('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {

        return (
            <form action="action_page.php">
                <div class="container">
                    <h1>Register</h1>
                    <hr/>

                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required 
                    value={ this.state.username} onChange={this.changeHandle} />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required 
                    value={ this.state.email} onChange={this.changeHandle} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required 
                    value={ this.state.password} onChange={this.changeHandle} />

                    {/* <label for="psw_repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw_repeat" id="psw_repeat" required 
                    value={ this.state.psw_repeat} onChange={this.changeHandle} /> */}
                    <hr/>

                    <button onClick={this.submitUser} type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>


            </form>
        )
    }
}

export default Register;