import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors"
  const variantStyles = {
    default: "bg-primary text-white",
    secondary: "bg-gray-100 text-gray-900",
    outline: "border border-gray-200 text-gray-700"
  }
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge;

