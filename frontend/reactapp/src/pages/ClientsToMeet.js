import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard3 from '../components/ClientCard3.js';
import TopNav from '../components/TopNav.js';
import {UserAddOutlined} from '@ant-design/icons';
import {StarFilled} from '@ant-design/icons';
import { Input, Card ,Button , Dropdown, Menu, Select} from 'antd';
const { TextArea } = Input;
const { Option } = Select;


function ClientsToMeet (){
    function onChange(value) {
        console.log(`selected ${value}`);
      }
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }
    const menuLegalAdvisor = (
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a Legal Advisor"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Tom">Cleared of legal charges</Option>
        <Option value="lucy">Need another meeting</Option>
        <Option value="tom">No progress</Option>
      </Select>
      );
    return(
        <div>
        <PhoneBreakpoint>
        <TopNav />
        <h3 style={{margin:'20px',fontSize:'25px',fontWeight:'bold'}} >Legal Advisor: Ann Lee</h3>
        <h2 style={{margin: '20px', fontSize: '25px', fontWeight: 'bold'}}>Clients To Meet</h2>
        <p>Change Status of Selected Client: {menuLegalAdvisor}</p>
        <ClientCard3 name="Kathy" status="Caught up in a lawsuit" id="id1"></ClientCard3>
        <ClientCard3 name="Tom" status="Divorce Law Case" id="id2"></ClientCard3>
        <ClientCard3 name="Casey" status="Legal Property Right Issues" id="id3"></ClientCard3>
        <ClientCard3 name="Carmen" status="Pending Prison formalities" id="id4"></ClientCard3>
        </PhoneBreakpoint>
        </div>


    )
}

export default ClientsToMeet;
