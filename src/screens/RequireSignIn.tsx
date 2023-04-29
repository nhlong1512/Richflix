import React, { useEffect, useState } from "react";
import { Col, Cascader } from "antd";
import LogoNetflix from "../assets/images/Logo.png";
import BgRequire from "../assets/images/BgRequire.jpg";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const styleBgRequire: React.CSSProperties = {
  backgroundImage: `url(${BgRequire})`,
  position: "relative",
  height: "100%",
  backgroundSize: "cover",
};

const styleBgGradient: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  zIndex: 100,
  background: "rgba(0,0,0,0.4)",
  backgroundPosition: "center",
  backgroundImage:
    "linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
};

const RequireSignIn = () => {
  const options: Option[] = [
    {
      value: "English",
      label: "English",
    },
  ];
  return (
    <Col style={styleBgRequire}>
      <Col style={styleBgGradient}>
        <Col
          span={24}
          className="w-full z-[10] transition-all duration-500 ease-in"
        >
          <Col
            span={20}
            offset={2}
            className="flex justify-between py-[24px] cursor-pointer items-center"
          >
            <Col>
              <img src={LogoNetflix} alt="logo" />
            </Col>
            <Col className="flex justify-between items-center">
              {/* <Cascader defaultValue={['English']} options={options} /> */}
              <button className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[4px] leading-[24px]">
                Sign In
              </button>
            </Col>
          </Col>
        </Col>
        
      </Col>
    </Col>
  );
};

export default RequireSignIn;
