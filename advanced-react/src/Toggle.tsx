import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({ onToggle, children, onReset, initialOnProps }: any) => {
  const [on, setOn]: any = useState(false);
  const initialState = initialOnProps; 

  const callAll = (...fns) => (...args) => {
    return fns.forEach((fn) => fn && fn(args))
  }


  const ToggleHandler = () => (
    setOn(!on),
    () => {
      onToggle(!on);
    }
  );

  const getToggleProps = ({ onClick, ...props }) => {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, ToggleHandler),
      ...props,
    };
  };

  // setting the initial state which is false
  const resetState = () =>  (
    setOn(initialState), 
    onReset(on)
  )

  const getStateAndHelpers = () => {
    return { name: 'pouya', toggleProps: getToggleProps, reset: resetState};
  };


  const renderUI = (on, toggleHandler) => (
    <ToggleContext.Provider value={{ on, toggleHandler }}>
      {children(getStateAndHelpers())}
    </ToggleContext.Provider>
  );

  return renderUI(on, ToggleHandler);
};

Toggle.On = SwitchTitle;
Toggle.Button = ToggleButton;

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
  onButtonClick = () => alert('onButtonClick'),
  onReset = (...args:any) => console.log('onReset', ...args),
  initialOnProps = false 
}): any => {
  return (
    <Toggle onToggle={onToggle} onReset={onReset} initialOnProps={initialOnProps}>
      {({ name, toggleProps, reset }) => {
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
            <button style={{ margin:"2rem" }} onClick={reset}>Reset</button>
          </div>
        );
      }}
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
