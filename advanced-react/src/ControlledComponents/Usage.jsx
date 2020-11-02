import React, { useState } from 'react';
import { Toggle } from './Toggle';

export const Usage = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(true);
  };

  return (
    <div>
      <Toggle on={on} onToggle={handleToggle}></Toggle>
      <Toggle on={on} onToggle={handleToggle}></Toggle>
    </div>
  );
};
