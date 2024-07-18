const Button = ({ className = '', children = '', ...props }) => {
  return (
    <button
      {...props}
      className={`w-full px-2 py-4 text-sm text-center text-white uppercase transition bg-red-500 rounded-sm hover:bg-red-600 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
