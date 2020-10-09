import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import $ from 'jquery';
import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from './utilities/desktopbreakpoint';
import TabletBreakpoint from './utilities/tabletbreakpoint';
import PhoneBreakpoint from './utilities/phonebreakpoint';
import { Route, Switch, Link, BrowserRouter,HashRouter } from "react-router-dom";
import ClientPage from './pages/ClientPage.js';
import ClientPage2 from './pages/ClientPage2.js';
import ClientPage4 from './pages/ClientPage4.js';
import ClientPageDetail from './pages/ClientPageDetail.js';
import ClientsToMeet from './pages/ClientsToMeet.js';

const APIURL = 'http://localhost:3002/cfg-apac-team29/us-central1/api/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn: false,
        role: '',
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }


  handleLoginSubmit(event,role) {
    event.preventDefault();
    this.setState({
      isLoggedIn:true,
      role: role,
    });

  }

  handleLogOut(){
    this.setState({
      isLoggedIn:false,
    });
  }

  getCMUserInterface(){
      return(
          <HashRouter basename="/">
           <Route path="/" exact component={() => <ClientPage handleLogOut={this.handleLogOut} />} />
            <Route path="/clientPage2" component={ClientPage2} />
            <Route path="/clientPage4" component={ClientPage4} />
            <Route path="/clientPageDetail" component={ClientPageDetail} />

          </HashRouter>
      );

  }


  render() {
    let userInterface = null;
    if(this.state.isLoggedIn){
        userInterface = this.getCMUserInterface();
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
// export default class App extends Component {
//   render() {
//   return (
//   <div>
//   <h2>My Breakpoints!</h2>

//   <DesktopBreakpoint>
//   <h3>DesktopBreakpoint!</h3>
//   </DesktopBreakpoint>
//  <TabletBreakpoint>
//   <h3>TabletBreakpoint!</h3>
//   </TabletBreakpoint>
//  <PhoneBreakpoint>
//   <h3>PhoneBreakpoint</h3>
//   </PhoneBreakpoint>
//   </div>
//   );
//   }
//  }
export default App;
