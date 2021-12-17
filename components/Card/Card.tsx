import React from 'react'

export const Card = ({bgColor}) => {
  return (
    <div className={`${bgColor} card`}>
      <h1>Good Morning, Eleanor</h1>
    </div>
  );
}
