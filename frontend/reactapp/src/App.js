import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import $ from 'jquery'; 

const APIURL = 'http://localhost:3002/cfg-apac-team29/us-central1/api/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn: false,
        role: '',
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  } 
  

  handleLoginSubmit(event,role) { 
    event.preventDefault();
    this.setState({
      isLoggedIn:true,
      role: role,
    });
    
  }

  render() {
    let userInterface = null;
    if(this.state.isLoggedIn){
    userInterface = <h1>logged In As {this.state.role}</h1>;
    }else{
      userInterface = <Login handleLoginSubmit={this.handleLoginSubmit} />;
    }
    return(
      <div className="App">        
        {userInterface}
      </div>
    );
    
  }
  
}

export default App;
