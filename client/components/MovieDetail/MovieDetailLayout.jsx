const MovieDetailLayout = (props) => {
  return (
    <div className="flex flex-col px-4 md:px-12 mt-24 sm:mt-28 lg:mt-36 lg:px-24 w-full lg:w-2/3">
      {props.children}
    </div>
  );
};

export default MovieDetailLayout;