import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-red-500">
      <h2 className="text-2xl font-semibold">{message || 'Something went wrong!'}</h2>
    </div>
  );
};

export default Error;
