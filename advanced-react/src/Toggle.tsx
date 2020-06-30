import React, { useState } from 'react';

import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({ onToggle, children }: any) => {
  const [on, setOn]: any = useState({
    value: false,
    toggle: (): any => (
      setOn(!on.value),
      () => {
        onToggle(on.value);
      }
    ),
  });

  console.log(on.toggle);

  return <ToggleContext.Provider value={on}>{children}</ToggleContext.Provider>;
};

// extending our functional component object
Toggle.On = SwitchTitle;
Toggle.Button = ToggleButton;

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
}): any => {
  return (
    <Toggle onToggle={onToggle}>
      <div>
        <Toggle.On>The button is on</Toggle.On>
      </div>
      <Toggle.Button></Toggle.Button>
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
