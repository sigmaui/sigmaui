import React from 'react';

const Button = ({
  className,
  children
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Button