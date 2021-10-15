const Button = (props) => {
  const buttonState = props.isAbleToSubmit
    ? "bg-primary cursor-pointer"
    : "bg-gray cursor-default";
  return (
    <button
      type="button"
      className={`${buttonState} text-white font-poppins px-4 py-2 font-medium text-xs md:text-sm rounded-lg`}
      disabled={!props.isAbleToSubmit}
    >
      {props.children}
    </button>
  );
};

export default Button;
