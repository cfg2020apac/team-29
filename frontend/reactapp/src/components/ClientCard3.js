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
render(){

    return(
        <div>
        <div>
             {console.log(this.state.items)}
              {this.renderRedirectToClientDetail()}
        </div>
        <Card title={this.props.name} extra={<a href="#">{this.props.id}</a>} style={{ marginRight:'10px',marginLeft:'10px',marginBottom:'20px',height:200,width: 'auto', textAlign:'left'}}>
        <div style={{display:'flex'}} >
        <p style={{marginRight:'200px'}}>{this.props.status}</p>
        </div>
        <div>
            <Button  style={{float:'left'}}type="secondary"  onClick={this.setRedirectToClientDetail}> More </Button>
        </div>
      </Card>
      </div>
    )
}
}

export default ClientCard
