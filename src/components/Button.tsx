import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-300 flex items-center justify-center';
  const variantStyles = {
    primary: 'bg-[#8b5e83] text-white hover:bg-[#7a4f72] shadow-sm',
    secondary: 'bg-[#f0e6ee] text-[#8b5e83] hover:bg-[#e6d7e3]',
    outline: 'bg-transparent border border-[#8b5e83] text-[#8b5e83] hover:bg-[#f9f4f8]'
  };
  const sizeStyles = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3'
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  return <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>;
};
export default Button;