import React from "react";
import { Col, Row } from "antd";
import Banner2 from "../assets/images/MoviePoster2.png";
import TitleMoviePoster from "../assets/images/TitleMoviePoster.png";
import PlayButton from "../assets/icons/Play.png";
import DetailButton from "../assets/icons/Detail.png";

//NavList

//Style
const imgStyle: React.CSSProperties = {
  backgroundImage: `url(${Banner2})`,
  height: "100%",
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "grid",
  placeItems: "center",
  width: "100%",
  maxWidth: "100%",
};

const Banner: React.FC = () => {
  return (
    <Col span={24}>
      <Col span={24} style={imgStyle} className="relative">
        <Col span={9} offset={1} className="absolute left-0">
          <img src={TitleMoviePoster} alt="title" />
          <div className="my-[15px]">
            <p className="m-0 font-NetflixSansMedium text-[24px] text-white leading-[30px] font-[500]">
              #4 in TV Shows Today
            </p>
          </div>
          <p className="font-NetflixSansLight text-[18px] leading-[24px] text-white font-[300]">
            After a demon attack leaves his family slain and his sister cursed,
            Tanjiro embarks upon a perilous journey to find a cure and avenge
            those he's lost.
          </p>
          <div className="flex gap-[15px]">
            <button className="px-[24px] py-[10px] rounded-[4px] text-[22px] leading-[28px] flex justify-center items-center border-none focus:ring-0 gap-[10px] cursor-pointer transition-all duration-200 ease-in hover:opacity-[0.8]">
              <img src={PlayButton} alt="play" />
              <p className="font-NetflixSansMedium p-0 m-0">Play</p>
            </button>
            <button className="px-[24px] py-[10px] rounded-[4px] text-[22px] leading-[28px] flex justify-center items-center border-none focus:ring-0 text-white gap-[10px] cursor-pointer transition-all duration-200 ease-in hover:opacity-[0.8]" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
              <img src={DetailButton} alt="info"/>
              <p className="font-NetflixSansMedium p-0 m-0">More Info</p>
            </button>
          </div>
        </Col>
      </Col>
    </Col>
  );
};

export default Banner;
