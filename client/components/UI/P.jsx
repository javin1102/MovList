const P = (props) => {
  return (
    <p
      className={` ${props.className} font-normal text-xs md:text-sm lg:text-sm text-gray`}
    >
      {props.children}
    </p>
  );
};

export default P;
