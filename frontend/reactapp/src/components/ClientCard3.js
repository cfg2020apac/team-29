import React,{Component} from 'react';
// import logo from './logo.svg';
import "antd/dist/antd.css";
import {Redirect} from 'react-router-dom'
import { MediaQuery } from 'react-responsive'
import { Card ,Button} from 'antd';
import {StarFilled} from '@ant-design/icons';

class ClientCard extends Component{

    constructor(props){
        super(props);

        this.setRedirect = this.setRedirect.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
        this.state={
            redirect: false,
            id: -1
        }

    }

    setRedirect() {
        console.log(this.props.id)
        this.setState({
          redirect: true,
          id: this.props.id
        })
      }
      renderRedirect() {
        if (this.state.redirect == true) {
          return <Redirect to={{
            pathname: '/ClientProfilePage',
            id:this.state.id
          }}></Redirect>
        }
      }

render(){

    return(
        <div>
        <div>
              {this.renderRedirect()}
        </div>
        <Card title={this.props.name} extra={<a href="#">{this.props.id}</a>} style={{ marginRight:'10px',marginLeft:'10px',marginBottom:'20px',height:200,width: 'auto', textAlign:'left'}}>
        <div style={{display:'flex'}} >
        <p style={{marginRight:'200px'}}>{this.props.status}</p>
        </div>
        <div>
            <Button  style={{float:'left'}}type="secondary"> More </Button>
            <Button style={{float:'right'}} type="primary" onClick={this.setRedirect} >Add Log</Button>
        </div>
      </Card>
      </div>
    )
}
}

export default ClientCard
