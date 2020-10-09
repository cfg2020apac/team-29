import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import {UserAddOutlined} from '@ant-design/icons';
import { Card ,Button} from 'antd';
import {Redirect} from 'react-router-dom';



class ProfilePageCM extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        };
    }

    setConfirmRedirect(){
        this.setState({
            redirect: true,
          });
    }
    renderConfirmRedirect(){

        if (this.state.redirect == true) {
          return (<Redirect to={{
            pathname: '/',
          }}></Redirect>);
        }
    }

    getClientInfo(){
        return {
            
        };
    }



    render(){
        const clientInfo = this.getClientInfo();
        return(
            <div>
            {this.renderConfirmRedirect()}
            
            <div>

            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <Button type="default" onClick={this.setConfirmRedirect} >Back</Button>
            </div>

          
    
        )
    }
    
}

export default ClientPage4;
