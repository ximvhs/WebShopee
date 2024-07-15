export default function Input({ name = '', type = 'text', children = '', className = '', ...props }) {
  return (
    <div className='mt-5'>
      <input
        type={type}
        name={name}
        id={name}
        {...props}
        className={`w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm ${className}`}
      />
      {children}
    </div>
  )
}
