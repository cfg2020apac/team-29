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
            id1:this.props.id1,
            id2:this.props.id2,
            name1:this.props.name1,
            name2:this.props.name2
        }

    }

    setRedirect() {
        console.log(this.state.id1)
        console.log(this.state.id2)
        console.log(this.state.name1)
        console.log(this.state.name2)
        this.setState({
          redirect: true,
          id: this.props.id,
          name1:this.state.name1,
          name2:this.state.name2,
          id1:this.state.id1,
          id2:this.state.id2
        })
      }
      renderRedirect() {
        if (this.state.redirect == true) {
          return <Redirect to={{
            pathname: '/clientPage4',
            id1:this.state.id1,
            name1:this.state.name1,
            id2:this.state.id2,
            name2:this.state.name2
          }}></Redirect>
        }
      }
    componentDidMount(){
      console.log(this.state.id1)
      console.log(this.state.id2)
      console.log(this.state.name1)
      console.log(this.state.name2)
      
    }
render(){    
  
    return(
        <div>
        <div>
              {this.renderRedirect()}
        </div>
        <Card title={this.props.name1} extra={<a href="#">{this.props.id1}</a>} style={{ marginRight:'10px',marginLeft:'10px',marginBottom:'20px',height:200,width: 'auto', textAlign:'left'}}>
        <div style={{display:'flex'}} >
        <p style={{marginRight:'200px'}}>{this.props.status}</p>
        <StarFilled style={{marginRight:'50px'}}/>
        </div>
        <div>Card cont 2</div> 
       
        <div>
            <Button  style={{float:'left'}}type="secondary"> More </Button>
        
       
            <Button style={{float:'right'}} type="primary" onClick={this.setRedirect} >Select </Button>
        </div>
      </Card>
      </div>
    )
}
}

export default ClientCard