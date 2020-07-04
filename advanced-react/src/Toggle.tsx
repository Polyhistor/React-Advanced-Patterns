import React, { useState } from 'react';

import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({ onToggle, children, render }: any) => {
  const [on, setOn]: any = useState(false);

  const ToggleHandler = () => (
    setOn(!on),
    () => {
      onToggle(!on);
    }
  );

  const getStateAndHelpers = () => {
    return { name: 'pouya', toggleProps: getToggleProps };
  };

  const getToggleProps = (props) => {
    return {
      'aria-pressed': on,
      onClick: ToggleHandler,
      ...props,
    };
  };

  const renderUI = (on, toggleHandler) => (
    <ToggleContext.Provider value={{ on, toggleHandler }}>
      {children(getStateAndHelpers())}
    </ToggleContext.Provider>
  );

  return renderUI(on, ToggleHandler);
};

// extending our functional component object
Toggle.On = SwitchTitle;
Toggle.Button = ToggleButton;

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
  onButtonClick = () => alert('onButtonClick'),
}): any => {
  return (
    <Toggle onToggle={onToggle}>
      {({ name, toggleProps }) => {
        console.log(toggleProps);
        return (
          <div>
            <h1>{name}</h1>
            <Toggle.On>The button is on</Toggle.On>
            <Toggle.Button
              {...toggleProps({
                'aria-label': 'custom-button',
                id: 'custom-button-id',
                onClick: onButtonClick,
              })}
            ></Toggle.Button>
          </div>
        );
      }}
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
