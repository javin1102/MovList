import CardSlider from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";
import SliderHeader from "./MovieSlider/SliderHeader";
import SliderPageNum from "./MovieSlider/SliderPageNum";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
const LatestUpdate = () => {
  const queries = gql`
    query {
      newMovies(page: 1) {
        title
        poster_path
      }
    }
  `;

  const { error, loading, data } = useQuery(queries);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data) setMovies(data.newMovies);
  }, [data, movies]);
  return (
    <SliderLayout>
      <SliderHeader>
        <SliderHeading>Latest Update</SliderHeading>
        <SliderPageNum>3/5</SliderPageNum>
      </SliderHeader>
      <CardSlider movies={movies} />
    </SliderLayout>
  );
};

export default LatestUpdate;
