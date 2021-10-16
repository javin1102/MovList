import SimilarMovieItem from "./SimilarMovieItem";

const SimilarMovieList = ({ similar }) => {
  return (
    <div className="mt-9 lg:max-h-[600px] lg:overflow-y-scroll pb-20 pr-5 scrollbar-thin scrollbar-thumb-primary">
      {similar.map((mov, id) => (
        <SimilarMovieItem key={id} movie={mov} />
      ))}
    </div>
  );
};

export default SimilarMovieList;
