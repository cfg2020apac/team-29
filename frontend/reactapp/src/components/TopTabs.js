import { Tabs } from 'antd';
import React from 'react';
import ClientCard from './ClientCard';
import {UserAddOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function TopTabs(){

    return (
    <div>
      <UserAddOutlined style={{float:"right"}}/>
  <Tabs onChange={callback} type="card">
  
    <TabPane tab="Todo" key="1">
    <ClientCard name="Client Name 1" status="client status 1" id="id1" todo='true'></ClientCard>
        <ClientCard name="Client Name 2" status="client status 2" id="id2" todo='true'></ClientCard>
        <ClientCard name="Client Name 3" status="client status 3" id="id3" todo='true'></ClientCard>
        <ClientCard name="Client Name 4" status="client status 4" id="id4" todo='true'> </ClientCard>
    </TabPane>
    <TabPane tab="In Progress" key="2">
    <ClientCard name="Client Name 11" status="client status 11" id="id1"></ClientCard>
        <ClientCard name="Client Name 21" status="client status 21" id="id2"></ClientCard>
        <ClientCard name="Client Name 32" status="client status 32" id="id3"></ClientCard>
        <ClientCard name="Client Name 43" status="client status 43" id="id4"> </ClientCard>
    </TabPane>
    <TabPane tab="Done" key="3">
    <ClientCard name="Client Name 15" status="client status 15" id="id1"></ClientCard>
        <ClientCard name="Client Name 24" status="client status 24" id="id2"></ClientCard>
        <ClientCard name="Client Name 35" status="client status 35" id="id3"></ClientCard>
        <ClientCard name="Client Name 46" status="client status 46" id="id4"> </ClientCard>
    </TabPane>
  </Tabs>
  </div>

    )
}
