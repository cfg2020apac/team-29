import React from 'react';
import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import TopNav from '../components/TopNav.js';
import SearchBar from '../components/SearchBar.js'
import {UserAddOutlined} from '@ant-design/icons';

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
        <SearchBar/>
        <h3>Client List/Flatmate List for Matching</h3>
        <div style={{textAlign:'right' ,marginRight:'10px'}}>
        
        <UserAddOutlined  />
        </div>
        <ClientCard name="Client Name 1" status="client status 1" id="id1"></ClientCard>
        <ClientCard name="Client Name 2" status="client status 2" id="id2"></ClientCard>
        <ClientCard name="Client Name 3" status="client status 3" id="id3"></ClientCard>
        <ClientCard name="Client Name 4" status="client status 4" id="id4"> </ClientCard>
        </PhoneBreakpoint>
        </div>
      

    )
}

export default ClientPage
