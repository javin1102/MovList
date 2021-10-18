const RoundedButton = ({ color, children, onClick }) => {
  const tertiaryColor =
    color === "tertiary"
      ? "text-tertiary hover:border-tertiary hover:bg-tertiary"
      : "";
  return (
    <button
      className={`flex items-center ${tertiaryColor} rounded-full border-[2px] px-2 py-1 font-poppins hover:text-white text-xs sm:px-4 sm:py-2 sm:text-base transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
