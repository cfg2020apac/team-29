import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard3 from '../components/ClientCard3.js';
import TopNav from '../components/TopNav.js';
import {UserAddOutlined} from '@ant-design/icons';
import {StarFilled} from '@ant-design/icons';



function JobCoachPage(){
    return(
        <div>
        <PhoneBreakpoint>
        <TopNav/>
        <h3 style={{margin: '20px', fontSize: '25px', fontWeight: 'bold'}}>Client To Meet</h3>
        <ClientCard3 name="Client Name 1" status="client status 1" id="id1"></ClientCard3>
        </PhoneBreakpoint>
        </div>


    )
}

export default JobCoachPage
