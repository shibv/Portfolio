import React from 'react';

const Button = ({ 
  variant = 'default', 
  children, 
  className = '', 
  asChild,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
  const variantStyles = {
    default: "bg-white text-gray-900 hover:bg-gray-100",
    outline: "border border-gray-200 bg-transparent hover:bg-gray-100 text-white"
  }

  const Comp = asChild ? 'a' : 'button'
  
  return (
    <Comp 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...(asChild ? {} : props)}
    >
      {children}
    </Comp>
  )
}

export default Button;

