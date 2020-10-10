import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React from 'react'
import '../index.css'

const { Search } = Input;


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#18244E'
    }}
  />
);

//backgroundColor:"#18244E" ,color:"#FFFFFF"

export default function SearchBar (){

  return(
      <div>
    {/* <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /> */}
   
    <Search style={{margin:"10px"}} placeholder="Search for client name or id" onSearch={value => console.log(value)} enterButton />
    <br />
    <br />
    {/* <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    /> */}
    {/* <br />
    <br /> */}
    {/* <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={value => console.log(value)}
    /> */}
    </div>
  );

}
 
