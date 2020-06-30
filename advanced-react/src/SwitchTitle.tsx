import React from 'react';

import { ToggleContext } from './Toggle';

const SwitchTitle = ({ children }: any) => {
  return (
    <ToggleContext.Consumer>
      {({ on }): any => on && children}
    </ToggleContext.Consumer>
  );
};

export { SwitchTitle };
