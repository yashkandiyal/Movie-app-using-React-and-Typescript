import React from "react";

type Props = {
  title: string;
  movieImage: string;
};

const MovieCard: React.FC<Props> = (props) => {
  // Construct absolute URL by concatenating base URL with poster path
  const imageURL = `https://image.tmdb.org/t/p/original${props.movieImage}`;

  return (
    <div>
      <div className="h-[25rem] w-56 bg-slate-700 flex flex-col justify-between items-center px-2 py-2">
        {/* Use the absolute URL as the src attribute of the img element */}
        <img src={imageURL} alt="" className=" object-cover h-full w-full" />
        <h2 className="text-white text-base pt-1">{props.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
