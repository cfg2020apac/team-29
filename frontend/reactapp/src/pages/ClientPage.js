import React from 'react';
import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import TopNav from '../components/TopNav.js';
import SearchBar from '../components/SearchBar.js'
import {UserAddOutlined} from '@ant-design/icons';
import TopTabs from '../components/TopTabs.js';

 class ClientPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div>
       
            {/* <h2>My Breakpoints!</h2>
            
            <DesktopBreakpoint>
            <h3>DesktopBreakpoint!</h3>
            </DesktopBreakpoint>
           <TabletBreakpoint>
            <h3>TabletBreakpoint!</h3>
            </TabletBreakpoint>
           <PhoneBreakpoint>
            <h3>PhoneBreakpoint</h3>
            </PhoneBreakpoint> */}
            <PhoneBreakpoint>
            <TopNav handleLogOut={this.props.handleLogOut} />
            <h3>Client List</h3>
            <SearchBar />
            <TopTabs/>
          
    
            
            
            
            </PhoneBreakpoint>
            </div>
          
    
        );
    }l
    
}

export default ClientPage;
