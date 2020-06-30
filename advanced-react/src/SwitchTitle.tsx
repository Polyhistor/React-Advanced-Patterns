import React from 'react';

import { ToggleContext } from './Toggle';

const SwitchTitle = ({ children }: any) => {
  return (
    <ToggleContext.Consumer>
      {(context): any => {
        if (!context) {
          throw new Error(
            'Toggle compound components must be rendered within the toggle component'
          );
        }

        return context.on ? children : null;
      }}
    </ToggleContext.Consumer>
  );
};

export { SwitchTitle };
