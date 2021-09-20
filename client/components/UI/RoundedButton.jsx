const RoundedButton = ({ color, children }) => {
  const tertiaryColor =
    color === "tertiary"
      ? "text-tertiary hover:border-tertiary hover:bg-tertiary"
      : "";
  return (
    <button
      className={`flex items-center ${tertiaryColor} rounded-full border-2 sm:px-5 sm:py-2 px-3 py-1 text-sm sm:text-base font-poppins  hover:text-white  transition-colors`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
