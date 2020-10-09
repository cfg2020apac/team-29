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

 function ClientPage(){

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
        <TopNav/>
        <h3>Client List/Flatmate List for Matching</h3>
        <SearchBar/>
        <TopTabs/>
      

        
        
        
        </PhoneBreakpoint>
        </div>
      

    )
}

export default ClientPage
