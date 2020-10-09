import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import {UserAddOutlined} from '@ant-design/icons';
import { Card ,Button} from 'antd';
import {Redirect} from 'react-router-dom';



class ClientPage4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        };

        this.setConfirmRedirect = this.setConfirmRedirect.bind(this);
        this.renderConfirmRedirect = this.renderConfirmRedirect.bind(this);
    }

    getSubmissionTime(){
        return(
            <p>Submission time: 08/10/2020 06:47pm</p>
        );
    };

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

    render(){
        return(
            <div>
            {this.renderConfirmRedirect()}
            
            <PhoneBreakpoint>
            
            <h1>Matched!</h1>
    
            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <p>Application is sent to HDB officier for approval.</p>
            <p>Selected client:</p>
            </div>
            
    
            <ClientCard name="Client Name 1" status="client status 1" id="id1"></ClientCard>
            <ClientCard name="Client Name 2" status="client status 2" id="id5"></ClientCard>
    
            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <p>Additional Notes:</p>
            <p>N/A</p>
            {this.getSubmissionTime()}
            </div>
            <div style={{textAlign:'right'}}>
            <Button type="primary" onClick={this.setConfirmRedirect} >Confirm</Button>
            </div>
            </PhoneBreakpoint>
            </div>
          
    
        )
    }
    
}

export default ClientPage4;
