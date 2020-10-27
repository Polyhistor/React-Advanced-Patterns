import './switch.styles.css';
import React from 'react';

const Switch = ({ on, className, ...rest }: any) => {

  const btnClassName = [
    className,
    'toggle-btn',
    on ? 'toggle-btn-on' : 'toggle-btn-off',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={() => {
         
        }}
      />
      <button className={btnClassName} aria-label="Toggle" {...rest}/>
    </div>
  );
};

export { Switch };
