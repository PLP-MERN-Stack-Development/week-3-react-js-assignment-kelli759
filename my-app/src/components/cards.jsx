// src/components/Card.jsx
import React from 'react';
import classNames from 'classnames';

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={classNames(
        'bg-white rounded-2xl shadow-md p-4 md:p-6 border border-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
