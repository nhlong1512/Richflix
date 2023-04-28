import React, { useEffect, useState } from "react";
import api from "../axios";
import { Col } from "antd";
import MovieCard from "./MovieCard";
import { Movie } from "../models/models";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const RowMovies: React.FC<Props> = ({
  title,
  fetchUrl,
  isLargeRow = false,
}) => {
  //Render Movies Card
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <Col className="flex flex-col overflow-y-hidden">
      <h2 className="font-NetflixSansMedium text-white">{title}</h2>
      <div className="no-scrollbar flex gap-[10px] overflow-y-hidden scroll-x-none">
        {movies.map((movie) => (
          <img
            key={movie.id}
            title={movie.name}
            src={
              isLargeRow
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            }
            alt={movie.name}
            className="max-h-[130px] w-[230px] transition-transform duration-500 hover:cursor-pointer hover:z-10 hover:scale-[1.08]"
          />
        ))}
      </div>
    </Col>
  );
};

export default RowMovies;
