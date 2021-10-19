const H3 = (props) => {
  return (
    <h3
      className={`text-xs font-semibold md:text-sm lg:text-base font-poppins ${props?.className}`}
    >
      {props.children}
    </h3>
  );
};

export default H3;
