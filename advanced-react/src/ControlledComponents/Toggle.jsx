import React, { useState } from 'react';
import Switch from './Switch';

export const Toggle = ({ onToggle, onProp }) => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    if (onProp !== undefined) {
      onToggle(getState().on);
    } else {
      setOn(!on);
    }
  };

  const getState = () => (
    {on: onProp !== undefined ? onProp : on}
  )

  return <Switch on={getState().on} onClick={handleToggle}></Switch>;
};
