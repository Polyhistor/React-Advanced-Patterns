import React, { useState } from 'react';

import { Switch } from './Switch';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({ onToggle, children }: any) => {
  //   console.log(children);
  const [on, setOn] = useState(false);

  const toggle = () => (
    setOn(!on),
    (() => {
      onToggle(on);
    })()
  );

  return (
    <ToggleContext.Provider
      value={{
        on,
        toggle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

// extending our functional component object
Toggle.On = SwitchTitle;
// Toggle.Off = SwitchTitle;

Toggle.Button = ({ on, toggle, ...props }: any) => (
  <ToggleContext.Consumer>
    {(contextValue) => (
      <Switch
        on={contextValue.on}
        onClick={contextValue.toggle}
        {...props}
      ></Switch>
    )}
  </ToggleContext.Consumer>
);

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
}): any => {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      {/* <Toggle.Off>The button is off</Toggle.Off> */}
      <Toggle.Button></Toggle.Button>
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
