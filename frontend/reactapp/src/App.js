import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn: false,
        
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  } 

  handleLoginSubmit(event) { 
    event.preventDefault();
    this.setState({
        isLoggedIn: true,
    });
    console.log(event.target.value);
  }

  render() {
    let userInterface = null;
    if(this.state.isLoggedIn){
      userInterface = <h1>logged In</h1>;
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
