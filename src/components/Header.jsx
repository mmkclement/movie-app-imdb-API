import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=3712c8421da7c846d6f35e5fc5c75c2d&language=en-US"
    );
    const data = await response.json();
    setRelatedMovies(data.results);
  };

  return (
    <section className="h-screen w-full">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        {/* Loop through each movie and create a SplideSlide */}
        {relatedMovies.map((movie) => (
          <SplideSlide key={movie.id}>
            {/* Pass image URL and title from movie data */}

            <HeaderCard movie={movie} imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Header;
