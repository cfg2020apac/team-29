import React from 'react';

import { MediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../utilities/desktopbreakpoint';
import TabletBreakpoint from '../utilities/tabletbreakpoint';
import PhoneBreakpoint from '../utilities/phonebreakpoint';
import ClientCard from '../components/ClientCard.js';
import {UserAddOutlined} from '@ant-design/icons';
import { Input, Card ,Button , Dropdown, Menu, Select} from 'antd';
import {Redirect} from 'react-router-dom';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import $ from 'jquery'; 
import {List,Avatar} from 'antd'
import OurPageHeader from '../components/OurPageHeader.js'
const { TextArea } = Input;
const { Option } = Select;





class ClientPageDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            gender: '',
            name: '',
            location: '',
            logs: [],
            timestart: '',
            comment: '',
            status: '',
            jobAssigned: '',
            id:this.props.location.id,
        };

        this.setBackRedirect = this.setBackRedirect.bind(this);
        this.renderBackRedirect = this.renderBackRedirect.bind(this);
        this.setSaveRedirect = this.setSaveRedirect.bind(this);
        this.setCommentRedirect = this.setCommentRedirect.bind(this);
    }

    setBackRedirect(){
        this.setState({
            redirect: true,
          });
    }
    renderBackRedirect(){

        if (this.state.redirect == true) {
          return (<Redirect to={{
            pathname: '/',
          }}></Redirect>);
        }
    }
    setSaveRedirect(){
        this.setState({
            redirect: true,
          });
    }

    setCommentRedirect(){
        let logsA = this.state.logs;
        logsA.push($('#commentInput').val());
        this.setState({
            logs: logsA,
          });
        console.log($('#commentInput').val());
    }

    componentDidMount() {
        fetch("http://localhost:3002/cfg-apac-team29/us-central1/api/getclients")
          .then(res => res.json())
          .then(
            (result) => {
                console.log('clients:',result);
                console.log('id:',this.state.id);
              for(let i in result.clients){
                  let client = result.clients[i];
                console.log(client, this.state.id);
                  if(client.id == this.state.id){
                      console.log('matched');
                      this.setState({
                          gender: client.value.gender,
                          name: client.value.name,
                          location: client.value.location,
                          logs: client.value.logs,
                          timestart: client.value.timestart,
                          comment: client.value.comment,
                          status: client.value.status,
                          jobAssigned: client.value.jobAssigned,
                      });
                    //   console.log('gender', this.state.gender);
                  }
              }

              // console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
              });
              console.log(error);
            }
          )
      }
      onChange = ({ target: { value } }) => {
        this.setState({ value});
      };

      


    render(){
      const data = [
        {
          title: `Name: ${this.state.name} `,
        },
        {
          title: `Gender: ${this.state.gender}`,
        },
        {
          title: `Location: ${this.state.location}`,
        },
        {
          title: `Reason of Application: ${this.state.comment} `,
        },
        {
          title: `Status: ${this.state.status} `
        }
      ];
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
            const menuCounsellor = (<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Counsellor"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Tom">Tom Lee</Option>
            <Option value="lucy">Tim Chan</Option>
            <Option value="tom">Ann Lee</Option>
          </Select>
            );
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
            <Option value="Tom">Edmond Lee</Option>
            <Option value="lucy">Tom Chan</Option>
            <Option value="tom">Ann Lee</Option>
          </Select>
          );
          const menuHBD = (
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a HBD"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Tom">Joe Lee</Option>
            <Option value="lucy">Tim Chan</Option>
            <Option value="tom">John Lee</Option>
          </Select>
          );
          const menuJobCoach = (
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Job Coach"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Tom">Tom Lee</Option>
            <Option value="lucy">Jason Chan</Option>
            <Option value="tom">Tommy Lee</Option>
          </Select>
          );
        return(
            <div>
            {this.renderBackRedirect()}

            <PhoneBreakpoint>

            <div style={{textAlign:'left' ,marginRight:'10px'}}>
            <Button type="primary" onClick={this.setBackRedirect} >Back</Button>
            </div>
        {/* <p>{this.state.id}</p> */}
        <OurPageHeader title="Client Details" subtitle="New Hope Community Service"/>
          {/* <h3 style={{backgroundColor:'#18244E',color:'#FFFFFF', alignText:'center'}}>Client Details</h3> */}
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
         
          title={item.title}
         
        />
      </List.Item>
    )}
  />
            {/* <p>Name: {this.state.name}</p>
            <p>Gender: {this.state.gender}</p>
            <p>Location: {this.state.location}</p>
            <p>Reason Of Application: {this.state.comment}</p>
            <p>Status: {this.state.status}</p> */}
        <p>Assigned Counsellor: {menuCounsellor}</p>
        <p>Assigned Legal Advisor: {menuLegalAdvisor}</p>
        <p>Assigned HBD officer: {menuHBD}</p>
        <p>Assigned Job Coach: {menuJobCoach}</p>
        <p>Job Assigned: {this.state.jobAssigned}</p>

        <p>Activity Log:</p>
        {this.state.logs.map((item,index)=>(
       <Card ><p>{index}: {item}</p></Card>
        ))}

        <TextArea rows={4}  onChange={this.onChange} placeholder="Additional Information" id= "commentInput" />
        <Button type="primary"  style={{float:"right", marginRight:"10px",marginTop:"5px", backgroundColor:'#18244E',color:'#FFFFFF'}} onClick={this.setCommentRedirect} >Add Commnet</Button>

        <Button type="primary"  style={{float:"none", marginRight:"10px",marginTop:"5px", backgroundColor:'#18244E',color:'#FFFFFF'}} onClick={this.setSaveRedirect} >Save</Button>

            </PhoneBreakpoint>
            </div>


        )
    }

}

export default ClientPageDetail;
