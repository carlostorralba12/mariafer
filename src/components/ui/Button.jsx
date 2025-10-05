/* Basic replacement for ShadCN Button */
export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none"
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  }
  const sizes = {
    md: "h-10 px-4 py-2 text-sm",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
