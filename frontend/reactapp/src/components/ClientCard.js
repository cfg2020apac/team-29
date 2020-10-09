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
        this.setRedirectToClientDetail = this.setRedirectToClientDetail.bind(this)
        this.renderRedirectToClientDetail = this.renderRedirectToClientDetail.bind(this)
        this.state={
            redirect: false,
            redirectToClientDetail:false,
            id: -1,
            items:[]
        }

    }
   
  

    setRedirect() {
        console.log(this.state.redirect)
        console.log(this.state.redirectToClientDetail)
        console.log(this.props.id)
        this.setState({
          redirect: true,
          id: this.props.id,
          name:this.props.name
        })
      }
      setRedirectToClientDetail() {
          console.log(this.state.redirect)
        console.log(this.props.id)
        this.setState({
          redirectToClientDetail: true,
          id: this.props.id
        })
      }
      renderRedirectToClientDetail() {
          console.log(this.state.redirect)
        if (this.state.redirectToClientDetail == true) {
          return <Redirect to={{
            pathname: '/clientPageDetail',
            id:this.state.id
          }}></Redirect>
        }
      }
      renderRedirect() {
          
        if (this.state.redirect == true) {
            // this.setState({
            //     redirect:false
            // })
            console.log(this.state.id)
          return <Redirect to={{
            pathname: '/clientPage2',
            id:this.state.id,
            name:this.state.name
          }}></Redirect>
        }
      }
    
render(){    
  
    return(
        <div>
        <div>
             {console.log(this.state.items)}
              {this.renderRedirectToClientDetail()}
              {this.renderRedirect()}
        </div>
      
        <Card title={this.props.name} extra={<a href="#">{this.props.id}</a>} style={{ marginRight:'10px',marginLeft:'10px',marginBottom:'20px',height:200,width: 'auto', textAlign:'left'}}>
        <p >{this.props.status}</p>
        
            {(this.props.todo=='true')?
            <div style={{textAlign:'right'}}>
            <Button style={{float:'left',backgroundColor:"#18244E" ,color:"#FFFFFF"}}type="secondary" onClick={this.setRedirectToClientDetail}>More</Button>
            <Button style={{float:'right',backgroundColor:"#18244E" ,color:"#FFFFFF"}}type="primary" onClick={this.setRedirect} >Match</Button>
            </div>:<div></div>
        }
        
      </Card>
      </div>
    )
}
}

export default ClientCard