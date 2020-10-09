import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import $ from 'jquery'; 
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';

// const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 1224px)'});
// const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
// const isTabletOrMobileDevice = useMediaQuery({query: '(max-device-width: 1224px)'});
// const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
// const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

const APIURL = 'http://localhost:3002/cfg-apac-team29/us-central1/api/';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
        //ADD CODE: ajax API here to check if the user exist
        // $.ajax({
        //     type:'POST',
        //     url: APIURL+'login',
        //     dataType: 'json',
        //     data: {
        //         username: this.state.username,
        //         password: this.state.password
        //       },
        //     xhrFields: {withCredentials: true},
        //     success: function(data) {
        //         console.log('print data:',data);                
        //         if(data.status == 'success'){
        //             this.props.handleLoginSubmit(event, data.role);
        //             this.setState({
        //                 isLoginFailed:false,
        //             });
        //         }else{
        //             this.setState({
        //                 isLoginFailed:true
        //             });
        //         }
        //         this.refresh();
              
        //     }.bind(this),
        //     error: function(xhr, ajaxOptions, thrownError) {
        //         alert(xhr.status, thrownError);
        //     }.bind(this)
        // });
        let isVerified = this.state.username == '123';
        if(isVerified){
            this.props.handleLoginSubmit(event, 'Case Manager');
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

    showLoginPageTitle(){
        return(
            <div className='loginPageTitle'>
            <h1>New Hope Mobile Matching System</h1>
            </div>
        );
    }
    

    render(){
        return(
            <div className='Login'>
                {this.showLoginPageTitle()}
                <br/>
                    <label for="input_username">Username:</label>
                    <input id="input_username" type="text" value={this.username} onChange={this.onUsernameChange} />
                    <br/>
                    <label for="input_password">Password:</label>
                    <input id="input_password" type="password" value={this.password} onChange={this.onPasswordChange} />
                    <br/>
                    <Button type='primary' onClick={this.handleLoginSubmit}>Submit</Button>
                {this.handleLoginFailed()}       
            </div>
        );
    }
}
export default Login;
