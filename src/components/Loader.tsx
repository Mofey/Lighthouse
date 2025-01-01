import React from 'react';

const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div className="relative flex items-center justify-center h-16 w-16">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-blue-500 border-l-blue-500 animate-spin"></div>
          {/* Inner pulsing circle */}
          <div className="relative h-8 w-8 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
