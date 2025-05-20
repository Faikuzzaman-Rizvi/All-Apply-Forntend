const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2'
  
  const variants = {
    primary: 'bg-gradient-to-br from-primary to-primary-dark text-white hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}