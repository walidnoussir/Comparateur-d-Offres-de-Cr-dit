const Button = ({ onShowDetails, children }) => {
  return (
    <button
      className="bg-blue-500 text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-75"
      onClick={() => onShowDetails()}
    >
      {children}
    </button>
  );
};

export default Button;
