import React from "react";
import { Col, Form, Input } from "antd";
import LogoNetflix from "../assets/images/Logo.png";
import BgRequire from "../assets/images/BgRequire.jpg";
import { useNavigate } from "react-router-dom";

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

const SignUpScreen = () => {
  const navigate = useNavigate();
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
              <button
                onClick={() => navigate("/sign-in")}
                className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[4px] leading-[24px]"
              >
                Sign In
              </button>
            </Col>
          </Col>
        </Col>
        <Col
          span={24}
          className="flex justify-center items-center flex-col max-h-[100%] bottom-[-50%]"
          style={{ transform: "translate(0, calc(-50% - 80px))" }}
        >
          <Form
            className="p-[70px] max-w-[500px]"
            style={{ background: "rgba(0,0,0, 0.85)" }}
          >
            <h3 className="font-NetflixSansMedium font-[300] text-[30px] leading-[36px] text-white mt-0">
              Sign Up
            </h3>
            <Input
              size="large"
              placeholder="Full Name"
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] min-w-[300px]"
            />
            <Input
              size="large"
              placeholder="Email"
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] min-w-[300px] mt-[16px]"
            />
            <Input
              size="large"
              placeholder="Password"
              type="password"
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] mt-[16px] min-w-[300px]"
            />
            <Input
              size="large"
              placeholder="Confirm Password"
              type="password"
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] mt-[16px] min-w-[300px]"
            />
            <button className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[24px] h-full w-full px-[24px] py-[16px] hover:opacity-70 rounded-[4px] leading-[24px] flex justify-center items-center mt-[36px]">
              Sign Up
            </button>
            <p className="font-NetflixSansMedium text-white mb-0">
              <span className="opacity-50">Already have to account ? </span>
              &nbsp;
              <span
                onClick={() => navigate("/sign-in")}
                className="font-NetflixSansMedium hover:underline hover:opacity-70"
              >
                Sign In
              </span>
            </p>
          </Form>
        </Col>
      </Col>
    </Col>
  );
};

export default SignUpScreen;
