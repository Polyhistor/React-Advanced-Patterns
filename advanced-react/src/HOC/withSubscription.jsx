import React from 'react';

export const withSubscription = (WrappedComponent, data) => {
  const clickHandler = () => {
    console.log('HOC Wrapper');
  };

  return (
    <WrappedComponent
      data={data && data}
      onClick={clickHandler}
    ></WrappedComponent>
  );
};
