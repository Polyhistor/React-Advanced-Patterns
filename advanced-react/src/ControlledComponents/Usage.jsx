import React, { useState } from 'react';
import { Toggle } from './Toggle';

export const Usage = () => {
  const [bothOn, setBothOn] = useState(false);

  const handleToggle = () => {
    setBothOn(!bothOn);
  };

  return (
    <div>
      <Toggle onProp={bothOn} onToggle={handleToggle}></Toggle>
      <Toggle onToggle={handleToggle}></Toggle>
    </div>
  );
};
