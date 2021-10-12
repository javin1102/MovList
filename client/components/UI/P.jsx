const P = (props) => {
  return (
    <p
      className={`font-normal text-gray text-xs md:text-sm lg:text-base ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default P;
