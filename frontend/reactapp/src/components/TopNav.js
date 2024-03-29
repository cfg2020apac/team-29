import { Menu } from 'antd';
import React from 'react'
import {Redirect} from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../../src/index.css'
const { SubMenu } = Menu;

class TopNav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });

    if(e.key == 'setting:5'){
      this.props.handleLogOut();
  }else if (e.key == "setting:2") {
        return (<Redirect to={{
          pathname: '/ClientPage4',
          id:this.state.id
        }}></Redirect>);
  }
  };



  render() {
    const { current } = this.state;
    return (
      <Menu style={{backgroundColor:'#18244E', color:'#FFFFFF'}}onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        {/* <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item> */}
        {/* <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item> */}
        <SubMenu key="SubMenu" icon={<SettingOutlined />}  title="Menu">
          <Menu.ItemGroup title="Your List">
            <Menu.Item key="setting:1">Search Client</Menu.Item>
            <Menu.Item key="setting:2">Job Coaches</Menu.Item>
            <Menu.Item key="setting:3">Legal Advisor</Menu.Item>
            <Menu.Item key="setting:4">Volunteers</Menu.Item>
            <Menu.Item key="setting:5">Log Out</Menu.Item>
          </Menu.ItemGroup>
          {/* <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
        </SubMenu>
        {/* <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default TopNav
