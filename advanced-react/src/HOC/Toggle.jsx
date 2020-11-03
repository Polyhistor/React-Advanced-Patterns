import { useState, createContext } from 'react';

export const Toggle = ({onToggle, children}) => {
  const ToggleContext = createContext({
    on: false, 
    toggle: () => {}
  })
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on), 
    onToggle(on)
  };

  return (
    <ToggleContext.Provider value={on} toggle={toggle} {...props}></ToggleContext.Provider>
  );
};
