import React from 'react';

export const BlogPost = ({ data }) => {
  return <>{data && data.data.map((d, i) => <span key={i}>{d.title}</span>)}</>;
};
