import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import $ from 'jquery'; 


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            isLoginFailed: false,
            username: '',
            password: '',
        };

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        
    }

    handleLoginSubmit(event){
        event.preventDefault();
        let isVerified = this.state.username == '123';
        //ADD CODE: ajax API here to check if the user exist

        if(isVerified){
            this.props.handleLoginSubmit(event);
        }else{
            this.setState({
                isLoginFailed:true
            });
        }
    }

    onUsernameChange(event) {
        this.setState({ username: event.target.value });
      }
    
    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleLoginFailed(){
        if(this.state.isLoginFailed == true){
            return(
                <div>
                <p className='loginFailtureText'> Login Failure!! </p>
                </div>
            );
        }
    }
    
    

    render(){
        return(
            <div className='Login'>
                <form className="form_login" onSubmit={this.handleLoginSubmit}>
                    <label for="input_username">Username:</label>
                    <input id="input_username" type="text" value={this.username} onChange={this.onUsernameChange} />
                    <br/>
                    <label for="input_password">Password:</label>
                    <input id="input_password" type="password" value={this.password} onChange={this.onPasswordChange} />
                    <br/>
                    <input id='login_sumbit' type="submit" value="Submit" />
                </form>
                {this.handleLoginFailed()}
            </div>
        );
    }
}
export default Login;