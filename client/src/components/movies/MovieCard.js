import React from "react";

function MovieCard({ item }) {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg"
      />
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <div className="flex items-center justify-between text-sm text-white opacity-50 mb-3">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize w-full text-white bg-red-600">
        Watch Now
      </button>
    </div>
  );
}

export default MovieCard;
