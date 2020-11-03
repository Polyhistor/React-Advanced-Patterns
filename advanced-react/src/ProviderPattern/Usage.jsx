import React, { Fragment, useState } from 'react';
import { Toggle } from './Toggle';
import Switch from "./Switch"


const Layer1 = ()=> <Layer2/>
const Layer2 = ()=> 
  <Fragment> 
    {on ? 'The button is on' : 'The button is off'}
    <Layer3 on={on} toggle={toggle}></Layer3>
  </Fragment>
const Layer3 = ({on, toggle})=> <Layer4 on={on} toggle={toggle}></Layer4>
const Layer4 = ({on, toggle})=> <Switch on={on} toggle={toggle}></Switch>

export const Usage = ({onToggle = (...args)=> console.log('onToggle', ...args)}) => {
  return (
    <Toggle onToggle={onToggle}>
      <Layer1></Layer1>
    </Toggle>
  );
};
