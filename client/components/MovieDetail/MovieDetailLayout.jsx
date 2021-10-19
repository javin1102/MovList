const MovieDetailLayout = (props) => {
  return (
    <div className="flex flex-col px-4 md:px-12 mt-24 sm:mt-28 lg:mt-36 lg:px-[8vw] w-full lg:w-[60%]">
      {props.children}
    </div>
  );
};

export default MovieDetailLayout;
