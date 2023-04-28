import React, { useEffect, useState } from "react";
import api from "../axios";
import requests from "../Requests";
import { Col } from "antd";
import PlayButton from "../assets/icons/Play.png";
import DetailButton from "../assets/icons/Detail.png";
import { Movie } from "../models/models";

const Banner: React.FC = () => {
  //State setMovies
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
      return response;
    };
    fetchData();
  }, []);

  console.log(movie);

  //CSSProperties

  //Style
  const imgStyle: React.CSSProperties = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    height: "100%",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "grid",
    placeItems: "center",
    width: "100%",
    minWidth: "100vh",
  };

  const bannerFadeBottom:React.CSSProperties = {
    height:'100px',
    backgroundImage: 'linear-gradient(180deg,transparent,rgba(37,37,37,0.61), #111)'
  }

  return (
    <Col span={24}>
      <Col span={24} style={imgStyle} className="relative">
        <Col span={9} offset={1} className="absolute left-0">
          <h3 className="uppercase text-[80px] leading-[100px] font-NetflixSansBold font-[900] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] m-0">
            {movie?.name || movie?.original_name}
          </h3>
          <div className="my-[15px]">
            <p className="m-0 font-NetflixSansMedium text-[24px] text-white leading-[30px] font-[500] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              #4 in TV Shows Today
            </p>
          </div>
          <p className="font-NetflixSansLight text-[18px] leading-[24px] text-white font-[300] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {/* After a demon attack leaves his family slain and his sister cursed,
            Tanjiro embarks upon a perilous journey to find a cure and avenge
            those he's lost. */}
            {movie?.overview}
          </p>
          <div className="flex gap-[15px]">
            <button className="px-[24px] py-[10px] rounded-[4px] text-[22px] leading-[28px] flex justify-center items-center border-none focus:ring-0 gap-[10px] cursor-pointer transition-all duration-200 ease-in hover:opacity-[0.8]">
              <img src={PlayButton} alt="play" />
              <p className="font-NetflixSansMedium p-0 m-0">Play</p>
            </button>
            <button
              className="px-[24px] py-[10px] rounded-[4px] text-[22px] leading-[28px] flex justify-center items-center border-none focus:ring-0 text-white gap-[10px] cursor-pointer transition-all duration-200 ease-in hover:opacity-[0.8]"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <img src={DetailButton} alt="info" />
              <p className="font-NetflixSansMedium p-0 m-0">More Info</p>
            </button>
          </div>
        </Col>
        <Col span={24} className="absolute bottom-0 w-full">
          <div style={bannerFadeBottom}>
          </div>
        </Col>
      </Col>
    </Col>
  );
};

export default Banner;
