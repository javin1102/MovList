const H2 = (props) => {
  return (
    <h2
      className={`text-sm font-bold md:text-base lg:text-2xl font-poppins ${
        !!props.className && props.className
      }`}
    >
      {props.children}
    </h2>
  );
};

export default H2;
