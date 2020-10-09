import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import {UserAddOutlined} from '@ant-design/icons';
import { Card ,Button} from 'antd';
import {Redirect} from 'react-router-dom';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';



class ClientPage4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        };
    }

       render(){


        return(
            <div>
                hi
            </div>
        )
       }

    }

    export default ClientPage4