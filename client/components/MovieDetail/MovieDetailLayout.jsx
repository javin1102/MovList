const MovieDetailLayout = (props) => {
  return (
    <div className="flex flex-row w-full px-4 md:px-12 mt-24 sm:mt-28 lg:mt-36 lg:px-24">
      {props.children}
    </div>
  );
};

export default MovieDetailLayout;
