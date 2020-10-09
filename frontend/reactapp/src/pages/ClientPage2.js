import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard2 from '../components/ClientCard2.js';
import TopNav from '../components/TopNav.js';
import SearchBar from '../components/SearchBar.js'
import {UserAddOutlined} from '@ant-design/icons';
import {StarFilled} from '@ant-design/icons';



function ClientPage2(){
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
        <SearchBar/>
        <h3>Our Recommended Clients</h3>
        <div style={{textAlign:'right' ,marginRight:'10px'}}>
        
        <UserAddOutlined  />
        </div>
        <ClientCard2 name="Client Name 2" status="client status 1" id="id1"></ClientCard2>
        <ClientCard2 name="Client Name 5" status="client status 5" id="id5"></ClientCard2>
        <ClientCard2 name="Client Name 56" status="client status 56" id="id56"></ClientCard2>
        <ClientCard2 name="Client Name 76" status="client status 76" id="id76"> </ClientCard2>
        </PhoneBreakpoint>
        </div>
      

    )
}

export default ClientPage2
