import React from "react";

function HeaderCard({ movie }) {
  return (
    <div className="w-full h-screen relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="dark-ov"></div>
      <div className="text-box">
        <h1 className="text-5xl font-extra-bold">{movie.title}</h1>
        <p className="text-lg font-medium">
          {movie.overview}
        </p>
        <button className="bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-1">
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default HeaderCard;
