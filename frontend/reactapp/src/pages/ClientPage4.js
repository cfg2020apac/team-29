import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import {UserAddOutlined} from '@ant-design/icons';
import { Card ,Button,PageHeader} from 'antd';
import {Redirect} from 'react-router-dom';



class ClientPage4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            id1:this.props.location.id1,
            name1:this.props.location.name1,
            name2:this.props.location.name2,
            id2:this.props.location.id2
        };

        this.setConfirmRedirect = this.setConfirmRedirect.bind(this);
        this.renderConfirmRedirect = this.renderConfirmRedirect.bind(this);
    }

    getSubmissionTime(){
        return(
            <p>Submission time: 08/10/2020 06:47pm</p>
        );
    };
    componentDidMount(){
        console.log(this.state.id1)
        console.log(this.state.name1)
        console.log(this.state.id2)
        console.log(this.state.name2)
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

    render(){
        return(
            <div>
            {this.renderConfirmRedirect()}
            
            <PhoneBreakpoint>
            
            {/* <h1>Matched!</h1> */}
            <PageHeader style={{borderWidth: "1px", borderWeight:'solid', backgroundColor:'#18244E', color:'#FFFFFF',alignCenter:'true',textSize:'large' }}
                     > Matched!</PageHeader>
    
            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <p style={{marginTop:'10px',marginLeft:'10px'}}>Application is sent to HDB officier for approval.</p>
            <p style={{marginLeft:'10px'}}>Selected client:</p>
            </div>
            
    
            <ClientCard name={this.state.name1}  status="In need for a job" id={this.state.id1}></ClientCard>
            <ClientCard name={this.state.name2}status="Caught up in a lawsuit" id={this.state.id2}></ClientCard>
    
            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <p>Additional Notes:</p>
            <p>{this.props.value}</p>
            {this.getSubmissionTime()}
            </div>
            <div style={{textAlign:'right'}}>
            <Button style={{backgroundColor:'#18244E',color:'#FFFFFF'}}type="primary" onClick={this.setConfirmRedirect} >Confirm</Button>
            </div>
            </PhoneBreakpoint>
            </div>
          
    
        )
    }
    
}

export default ClientPage4;
