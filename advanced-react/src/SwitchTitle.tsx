import React from 'react';

import { ToggleContext } from './Toggle';

const SwitchTitle = ({ children }: any) => {
  return (
    <ToggleContext.Consumer>
      {(context): any => {
        console.log(context);
        if (context === undefined) {
          throw new Error(
            'Toggle compound components must be rendered within the toggle context'
          );
        }
        return context.on ? children : null;
      }}
    </ToggleContext.Consumer>
  );
};

export { SwitchTitle };
