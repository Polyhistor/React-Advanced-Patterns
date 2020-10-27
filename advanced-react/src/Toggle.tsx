import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

const Toggle = ({
  onToggle,
  children,
  onReset,
  initialOnProps = false,
  toggleStateReducer,
}: any) => {
  const [on, setOn]: any = useState(false);
  const initialState = initialOnProps;
  const [timesClicked, setTimesClicked]: any = useState(0);

  const callAll = (...fns) => (...args) => {
    return fns.forEach((fn) => fn && fn(args));
  };

  const ToggleHandler = () => (
    setTimesClicked((timesClickedPrev) => timesClickedPrev + 1),
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
  const resetState = () => (
    setTimesClicked(0), setOn(initialState), onReset(on)
  );

  const getStateAndHelpers = () => {
    return {
      name: 'pouya',
      toggleProps: getToggleProps,
      reset: resetState,
      timesClicked,
    };
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
  onButtonClick = () => console.log('onButtonClick'),
  onReset = (...args: any) => console.log('onReset', ...args),
  initialOnProps = false,
  toggleStateReducer = (state, changes) => {
    if (state.timesClicked >= 4) {
      return { ...changes, on: false };
    }
    return changes;
  },
}): any => {
  return (
    <Toggle
      onToggle={onToggle}
      onReset={onReset}
      initialOnProps={initialOnProps}
      stateReducer={toggleStateReducer}
    >
      {({ name, toggleProps, reset, timesClicked }) => {
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
            <div>
              {timesClicked > 4 ? (
                <span>
                  You've clicked so many times my friend, chill... chill.
                </span>
              ) : (
                <span>Click Count:{timesClicked}</span>
              )}
            </div>
            <button style={{ margin: '2rem' }} onClick={reset}>
              Reset
            </button>
          </div>
        );
      }}
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
