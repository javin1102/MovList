const RoundedButton = ({ color, children }) => {
  return (
    <button
      className={`flex items-center text-tertiary rounded-full border-2 sm:px-5 sm:py-2 px-3 py-1 text-sm sm:text-base font-poppins hover:bg-${color} hover:text-white hover:border-${color} transition-colors`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
