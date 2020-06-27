import React, { useState } from 'react';

import { Switch } from './Switch';

const Toggle = ({ onToggle }: any) => {
  const [on, setOn] = useState(false);

  const toggle = () => (
    setOn(!on),
    (() => {
      onToggle(on);
    })()
  );

  return (
    <div>
      <Switch on={on} onClick={() => toggle()}></Switch>
    </div>
  );
};

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
}): any => {
  return <Toggle onToggle={onToggle} />;
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
