import React from 'react';

export const CommentList = ({ data, onClick }) => {
  return (
    <>
      {data &&
        data.data.map((d, i) => (
          <span key={i} onClick={onClick}>
            {d.title}
          </span>
        ))}
    </>
  );
};
