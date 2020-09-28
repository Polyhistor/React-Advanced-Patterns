import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({ onToggle, children, render }: any) => {
  const [on, setOn]: any = useState(false);

  // calling all the userse functions
  const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(args));

  const ToggleHandler = () => (
    setOn(!on),
    () => {
      onToggle(!on);
    }
  );

  const getStateAndHelpers = () => {
    return { name: 'pouya', toggleProps: getToggleProps };
  };

  const getToggleProps = ({ onClick, ...props }) => {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, ToggleHandler),
      ...props,
    };
  };

  // const resetSate = () => setOn(false);

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
