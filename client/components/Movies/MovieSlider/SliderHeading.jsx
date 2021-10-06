const SliderHeading = (props) => {
  return (
    <h2 className="text-lg font-semibold mb-4 md:text-2xl lg:text-3xl">
      {props.children}
    </h2>
  );
};

export default SliderHeading;
