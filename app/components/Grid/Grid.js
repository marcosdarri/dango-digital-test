import React from 'react';

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:mx-20">
      {children}
    </div>
  );
};

export default Grid;