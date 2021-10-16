import H2 from "../UI/H2";
import P from "../UI/P";

const MovieSynopsis = ({ overview }) => {
  return (
    <div className="flex flex-col justify-between font-poppins py-8 lg:py-12">
      <H2>Synopsis</H2>
      <P className="mt-4 lg:mt-8">{overview}</P>
    </div>
  );
};

export default MovieSynopsis;
