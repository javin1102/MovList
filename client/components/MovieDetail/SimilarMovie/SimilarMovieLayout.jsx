import H2 from "../../UI/H2";
import SimilarMovieList from "./SimilarMovieList";

const SimilarMovieLayout = ({ similar }) => {
  return (
    <div className="hidden lg:block lg:fixed lg:top-36 lg:right-[3vw] max-w-md">
      <H2 className="text-primary">Similar</H2>
      <SimilarMovieList similar={similar} />
    </div>
  );
};

export default SimilarMovieLayout;
