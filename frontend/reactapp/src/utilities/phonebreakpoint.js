import React from 'react';
import Breakpoint from './breakpoint';
export default function PhoneBreakpoint(props) {
 return (
 <Breakpoint name="phone">
 {props.children}
 </Breakpoint>
 );
}
// src/components/responsive_utilities/tablet_breakpoint.jsx
