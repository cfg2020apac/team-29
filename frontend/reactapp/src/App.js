import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from './utilities/desktopbreakpoint';
import TabletBreakpoint from './utilities/tabletbreakpoint';
import PhoneBreakpoint from './utilities/phonebreakpoint';
import { Route, Switch, Link, BrowserRouter,HashRouter } from "react-router-dom";
import ClientPage from './pages/ClientPage.js'

import ClientPage2 from './pages/ClientPage2.js';

function App() {
  return (
    
    // <div className="App">
    // <ClientPage/>
    // </div>

    <HashRouter basename="/ChooseWisely">
     <Route path="/" exact component={ClientPage} />
      <Route path="/clientPage2" component={ClientPage2} />
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
