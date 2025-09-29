import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "md", children, className = "", ...props }) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center"

  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white",
    outline:
      "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-300",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
