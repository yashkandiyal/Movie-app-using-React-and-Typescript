import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";

const MoviePage: React.FC = () => {
  const [movieData, setMovieData] = useState<any>([]);
  const [inputName, setInputName] = useState<string>("");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE2NDU5MDljN2VjMTk0Nzk0MGExNjRmNjRhMTI3ZSIsInN1YiI6IjY2MjllOWNhOGQ3N2M0MDA5YTJkOTFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCGT6yQWsvlJXTmntjczYfCwpk1OmLQxEYE2Bm7bU5U",
    },
  };
  const allmovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
        options
      );
      const data = await response.json();

      setMovieData(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputName}`,
        options
      );
      const data = await response.json();
      

      setMovieData(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allmovieData();
  }, [inputName]);

  const handleFilteredMovies = (e: any) => {
    if (e.code === "Enter") {
      filteredMovieData();
    }
  };
  const dummyImage="https://dummyimage.com/16:9x1080"
  return (
    <div className="px-7">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl text-white">MOVIE SITE</h1>

        <div>
          <input
            type="text"
            placeholder="Search...."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            onKeyDown={handleFilteredMovies}
            className="text-white py-2 px-4 rounded-2xl bg-slate-600"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5  flex-wrap">
        {movieData?.map((movie: any, index: number) => {
          return (
            <div key={index}>
              <MovieCard
                movieImage={movie.poster_path || dummyImage}
                title={movie.title || "Unknown"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviePage;
