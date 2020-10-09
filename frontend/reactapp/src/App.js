import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from './utilities/desktopbreakpoint';
import TabletBreakpoint from './utilities/tabletbreakpoint';
import PhoneBreakpoint from './utilities/phonebreakpoint';
import { Route, Switch, Link, BrowserRouter,HashRouter } from "react-router-dom";
import ClientPage from './pages/ClientPage.js';
import ClientPage2 from './pages/ClientPage2.js';
import ClientPage4 from './pages/ClientPage4.js';
import JobCoachPage from './pages/JobCoachPage.js';
import ClientProfilePage from './pages/ClientProfilePage.js';


function App() {
  return (

    // <div className="App">
    // <ClientPage/>
    // </div>

    <HashRouter basename="/clientPage1">
     <Route path="/" exact component={ClientPage} />
      <Route path="/clientPage2" component={ClientPage2} />
      <Route path="/clientPage4" component={ClientPage4} />
      <Route path="/JobCoachPage" component={JobCoachPage} />
    </HashRouter>


  );
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
