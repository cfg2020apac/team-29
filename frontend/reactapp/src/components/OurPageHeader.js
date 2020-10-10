import { PageHeader } from 'antd';
import React from 'react';

const routes = [
  {
    path: 'index',
   
  },
  {
    path: 'first',
    
  },
  {
    path: 'second',
    
  },
];

export default function OurPageHeader(props){
    return(
  <PageHeader
      styles={{color:"#FFFFFF",backgroundColor:'#18244E'}}
    className="site-page-header"
    title={props.title}
  
    subTitle={props.subtitle}
  />
    )
}
