import React,{Component} from 'react';
// import logo from './logo.svg';
import "antd/dist/antd.css";
import {Redirect} from 'react-router-dom'
import { MediaQuery } from 'react-responsive'
import { Card ,Button} from 'antd';


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
            pathname: '/clientPage2',
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
        <Card title={this.props.name} extra={<a href="#">{this.props.id}</a>} style={{ marginBottom:'20px',height:200,width: 'auto', textAlign:'left'}}>
        <p >{this.props.status}</p>
        <p>Card content</p>

        <div style={{textAlign:'right'}}>
            <Button type="primary" onClick={this.setRedirect} >Match</Button>
        </div>
      </Card>
      </div>
    )
}
}

export default ClientCard