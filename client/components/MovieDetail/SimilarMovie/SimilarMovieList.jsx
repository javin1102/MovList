import SimilarMovieItem from "./SimilarMovieItem";

const SimilarMovieList = () => {
  return (
    <div className="mt-9 lg:max-h-[600px] lg:overflow-y-scroll pb-20 scrollbar-track-red-300 scrollbar scrollbar-thumb-gray">
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
