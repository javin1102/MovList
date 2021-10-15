import SimilarMovieItem from "./SimilarMovieItem";

const SimilarMovieList = () => {
  return (
    <div className="mt-9 lg:max-h-[600px] lg:overflow-y-scroll pb-20 pr-5 scrollbar-thin scrollbar-thumb-primary">
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
      <SimilarMovieItem />
    </div>
  );
};

export default SimilarMovieList;
