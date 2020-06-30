import React from 'react';

import { ToggleContext } from './Toggle';
import { Switch } from './Switch';

const ToggleButton = ({ on, toggle, ...props }: any) => (
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

export { ToggleButton };
