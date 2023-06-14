import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";

function MovieList({ type = "now_playing" }) {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8079/${type}`).then((res) => {
      setData(res.data);
      console.log("data from server: ", res.data);
    });
  }, []);

  return (
    <div className="movie-list grid grid-cols-4 gap-10 ">
      {data.length > 0 &&
        data.map(
          (item, index) =>
            index < 8 && (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            )
        )}
    </div>
    //  </div>
  );
}

export default MovieList;
