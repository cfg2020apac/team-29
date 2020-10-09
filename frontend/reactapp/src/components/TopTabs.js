import { Tabs } from 'antd';
import React from 'react';
import ClientCard from './ClientCard';
import {UserAddOutlined} from '@ant-design/icons';
import '../../src/index.css'
import '../../src/App.css'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class  TopTabs extends React.Component{


  constructor(props){
    super(props);

    this.state={
      
      items:[]
  }
  }
   
  
  
  componentDidMount() {
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
  //"#18244E"
  render(){
    console.log(this.state.items)
    return (
    <div>
      <UserAddOutlined style={{float:"right"}}/>
  <Tabs onChange={callback} type="card">
  
    <TabPane style={{color:"#18244E"}} tab="Todo"  key="1">
    {/* <ClientCard name="Client Name 1" status="client status 1" id="id1" todo='true'></ClientCard> */}
    {
     
      this.state.items.map((item,index)=>(
        <ClientCard name={item.value.name} status={item.value.comments} id={item.id} todo='true'></ClientCard>
      )
      )
    }
        
        {/* <ClientCard name="Client Name 3" status="client status 3" id="id3" todo='true'></ClientCard>
        <ClientCard name="Client Name 4" status="client status 4" id="id4" todo='true'> </ClientCard> */}
    </TabPane>
    <TabPane style={{color:"#18244E"}} tab="In Progress" key="2">
    <ClientCard name="Client Name 11" status="client status 11" id="id1"></ClientCard>
        <ClientCard name="Client Name 21" status="client status 21" id="id2"></ClientCard>
        <ClientCard name="Client Name 32" status="client status 32" id="id3"></ClientCard>
        <ClientCard name="Client Name 43" status="client status 43" id="id4"> </ClientCard>
    </TabPane>
    <TabPane style={{color:"#18244E"}} tab="Done" key="3">
    <ClientCard name="Client Name 15" status="client status 15" id="id1"></ClientCard>
        <ClientCard name="Client Name 24" status="client status 24" id="id2"></ClientCard>
        <ClientCard name="Client Name 35" status="client status 35" id="id3"></ClientCard>
        <ClientCard name="Client Name 46" status="client status 46" id="id4"> </ClientCard>
    </TabPane>
  </Tabs>
  </div>

    )
      }
}

export default TopTabs