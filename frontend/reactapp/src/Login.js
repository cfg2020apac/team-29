import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import $ from 'jquery'; 
import { Form, Input, Button, Checkbox } from 'antd';
import {Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import './Login.css';
import logo2 from './nhcslogo.jpg';

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
            redirect:false
        };

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.setgoForward = this.setgoForward.bind(this);
        
    }

    handleLoginSubmit(event){
        event.preventDefault();
        //ADD CODE: ajax API here to check if the user exist
        $.ajax({
            type:'POST',
            url: APIURL+'login',
            dataType: 'json',
            data: {
                username: this.state.username,
                password: this.state.password
              },
            xhrFields: {withCredentials: true},
            success: function(data) {
                console.log('print data:',data);                
                if(data.status == 'success'){
                    this.props.handleLoginSubmit(event, data.role);
                    this.setState({
                        isLoginFailed:false,
                    });
                }else{
                    this.setState({
                        isLoginFailed:true
                    });
                }
                // this.refresh();
              
            }.bind(this),
            error: function(xhr, ajaxOptions, thrownError) {
                this.setState({
                    isLoginFailed:true
                });
            }.bind(this)
        });
        // let isVerified = this.state.username == '123';
        // if(isVerified){
        //     this.props.handleLoginSubmit(event, 'Case Manager');
        // }else{
        //     this.setState({
        //         isLoginFailed:true
        //     });
        // }
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
                <img src={logo2}></img>
            <h1 className='LoginElement'>New Hope Mobile Matching System</h1>
            </div>
        );
    }
    setgoForward(){
     
            
            this.setState({
              redirect: true
             
            })
          
    }
    rendergoForward() {
          
        if (this.state.redirect == true) {
            // this.setState({
            //     redirect:false
            // })
          
          return <Redirect to={{
            pathname: '/clientPage',
           
          }}></Redirect>
        }
      }

    render(){
        return(
            <div className='Login'>
                {this.showLoginPageTitle()}
                <br/>
                    <label className='LoginElement' for="input_username">Username:</label>
                    <input className='LoginElement' id="input_username" type="text" value={this.username} onChange={this.onUsernameChange} />
                    <br/>
                    <label className='LoginElement' for="input_password">Password:</label>
                    <input className='LoginElement' id="input_password" type="password" value={this.password} onChange={this.onPasswordChange} />
                    <br/>
                    <Button shape="round" size="large" style={{backgroundColor:'#18244E',color:'#FFFFFF'}} type='secondary' onClick={this.handleLoginSubmit}>Submit</Button>
                {this.handleLoginFailed()}       
            </div>
        );
    }
}
export default Login;
