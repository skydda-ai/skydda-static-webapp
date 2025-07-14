import React from 'react';

interface SpinnerProps {
  size?: number;
}

const Loader: React.FC<SpinnerProps> = ({ size = 15 }) => {
  return (
    <div className='flex items-center justify-center'>
      <img
        src='/icons/spinner.svg'
        alt='Loading...'
        className='animate-spin'
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
    </div>
  );
};

export default Loader;
