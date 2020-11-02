import React, { useState } from 'react';
import Switch from './Switch';

export const Toggle = ({ onToggle }) => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
    onToggle(on);
  };

  return <Switch on={on} onClick={handleToggle}></Switch>;
};
