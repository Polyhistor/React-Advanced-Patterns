import React, { useState } from 'react';

import { Switch } from './Switch';

const Toggle = ({ onToggle, children }: any) => {
  console.log(children);
  const [on, setOn] = useState(false);

  const toggle = () => (
    setOn(!on),
    (() => {
      onToggle(on);
    })()
  );

  return React.Children.map(children, (childElement) =>
    React.cloneElement(childElement, {
      on,
      toggle,
    })
  );
};

// extending our functional component object
Toggle.On = ({ on, children }: any) => (on ? children : null);
Toggle.Off = ({ on, children }: any) => (on ? null : children);
Toggle.Button = ({ on, toggle, ...props }: any) => (
  <Switch on={on} onClick={toggle} {...props}></Switch>
);

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
}): any => {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button></Toggle.Button>
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
