const RoundedButton = (props) => {
  return (
    <button className="flex items-center text-tertiary rounded-full border-2 sm:px-5 sm:py-2 px-3 py-1 text-sm sm:text-base font-poppins hover:bg-tertiary hover:text-white hover:border-tertiary">
      {props.children}
    </button>
  );
};

export default RoundedButton;
