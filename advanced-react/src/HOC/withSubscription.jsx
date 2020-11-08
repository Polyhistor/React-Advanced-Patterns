import React from 'react';

export const withSubscription = (WrappedComponent, data) => {
  const clickHandler = () => {
    console.log('HOC Wrapper');
  };

  const arbitratyProps = {
    methodA: () => <h2>arbitrary</h2>,
  };

  return (
    <WrappedComponent
      data={data && data}
      onClick={clickHandler}
      {...arbitratyProps}
    ></WrappedComponent>
  );
};
