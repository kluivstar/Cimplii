export default function Button({ children, onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cimplii-button ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
