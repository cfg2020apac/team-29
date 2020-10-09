import React from 'react';
import {Redirect} from 'react-router-dom'
import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard2 from '../components/ClientCard2.js';
import TopNav from '../components/TopNav.js';
import SearchBar from '../components/SearchBar.js'
import {UserAddOutlined} from '@ant-design/icons';
import {StarFilled} from '@ant-design/icons';

import { Input ,Button} from 'antd';
const { TextArea } = Input;

class ClientPage2 extends React.Component{


    constructor(props){
        super(props);

        this.state={
            value:'',
            redirect:false,
            id:this.props.location.id,
            name:this.props.location.name,
            id2:'',
            name2:'',
            items:[]
        }
    }


    onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
      setRedirect() {
        
        this.setState({
          redirect: true,
          value: this.props.value,
          id2:this.state.id2
         
        })
      }
      renderRedirect() {
        if (this.state.redirect == true) {
          return <Redirect to={{
            pathname: '/clientPage4',
            value:this.state.value
          }}></Redirect>
        }
      }
      componentDidMount() {
        console.log(this.state.name)
        console.log(this.state.id)
        fetch("http://localhost:3002/cfg-apac-team29/us-central1/api/getclients")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.clients
              });
              // console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
              console.log(error)
            }
          )
      }
    render(){
      console.log(this.state.items)
        const { value } = this.state.value
    return(
        <div>
            {console.log(this.state.value)}
            {this.renderRedirect()}
        {/* <h2>My Breakpoints!</h2>
        
        <DesktopBreakpoint>
        <h3>DesktopBreakpoint!</h3>
        </DesktopBreakpoint>
       <TabletBreakpoint>
        <h3>TabletBreakpoint!</h3>
        </TabletBreakpoint>
       <PhoneBreakpoint>
        <h3>PhoneBreakpoint</h3>
        </PhoneBreakpoint> */}
        <PhoneBreakpoint>
        <TopNav/>
        <SearchBar/>
        <h3>Our Recommended Clients</h3>
        <div style={{textAlign:'right' ,marginRight:'10px'}}>
        
        <UserAddOutlined  />
        </div>
        {
     
     this.state.items.map((item,index)=>(
       index!=0?
       <ClientCard2 name1={item.value.name} name2={this.state.name} status={item.value.comments} id1={item.id} id2={this.state.id} todo='true'></ClientCard2>:
       <div></div>
     )
     )
   }
        {/* <ClientCard2 name={this.state.name} status="client status 1" id={this.state.id}></ClientCard2>
        <ClientCard2 name="Client Name 5" status="client status 5" id="id5"></ClientCard2> */}
        {/* <ClientCard2 name="Client Name 56" status="client status 56" id="id56"></ClientCard2>
        <ClientCard2 name="Client Name 76" status="client status 76" id="id76"> </ClientCard2> */}

        <TextArea rows={4}  onChange={this.onChange} placeholder="Additional Information" />

        {/* <form id="noter-save-form" method="POST">
        <textarea id="noter-text-area" name="textarea" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Save" />
      </form> */}
        <Button type="primary" size="small" style={{ backgroundColor:"#18244E" ,color:"#FFFFFF" ,float:"right", marginRight:"10px", marginTop:"5px"}} onClick={this.setRedirect} >CONFIRM</Button>
        </PhoneBreakpoint>
        </div>
      

    )
    }
}

export default ClientPage2
