import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'filled' | 'outline';
  children: React.ReactNode;
  handleButtonClick?: () => void;
  className?: string;
};

const baseStyles =
  'font-inter px-5 py-3 rounded-3xl font-medium text-base cursor-pointer';

const variants = {
  filled: 'bg-[linear-gradient(to_right,_#45266A,_#632CA7)] text-white',
  outline: 'border border-white text-white'
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  children,
  handleButtonClick,
  className = '',
  ...props
}) => (
  <button
    className={`${baseStyles} ${variants[variant]} ${className}`}
    onClick={handleButtonClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
