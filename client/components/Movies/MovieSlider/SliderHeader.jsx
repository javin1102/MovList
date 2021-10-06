const SliderHeader = (props) => {
  return (
    <div className="flex justify-between items-center py-3 px-2 lg:py-5 lg:px-3">
      {props.children}
    </div>
  );
};

export default SliderHeader;
