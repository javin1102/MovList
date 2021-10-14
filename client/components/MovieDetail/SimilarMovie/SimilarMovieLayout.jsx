import H2 from "../../UI/H2";
import SimilarMovieList from "./SimilarMovieList";

const SimilarMovieLayout = () => {
  return (
    <div className="hidden lg:block lg:fixed lg:top-36 lg:right-12">
      <H2 className="text-primary">Similar</H2>
      <SimilarMovieList />
    </div>
  );
};

export default SimilarMovieLayout;
