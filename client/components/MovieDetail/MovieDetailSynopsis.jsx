import H2 from "../UI/H2";
import P from "../UI/P";

const MovieSynopsis = () => {
  return (
    <div className="flex flex-col justify-between font-poppins py-8 lg:py-12">
      <H2>Synopsis</H2>
      <P className="mt-4 lg:mt-8">
        A ticking-time-bomb insomniac and a slippery soap salesman channel
        primal male aggression into a shocking new form of therapy. Their
        concept catches on, with underground \"fight clubs\" forming in every
        town, until an eccentric gets in the way and ignites an out-of-control
        spiral toward oblivion.
      </P>
    </div>
  );
};

export default MovieSynopsis;
