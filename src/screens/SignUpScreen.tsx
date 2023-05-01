import React, { useEffect, useState } from "react";
import { Col, Form, Input, message } from "antd";
import LogoNetflix from "../assets/images/Logo.png";
import BgRequire from "../assets/images/BgRequire.jpg";
import { useNavigate } from "react-router-dom";
import { FormDataSignUp } from "../models/models";
import { auth } from "../firebase";

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

const SignUpScreen:React.FC = () => {
  const navigate = useNavigate();
  const initialState: FormDataSignUp = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [messageApi, contextHolder] = message.useMessage();

  //Handle formData Sign up change
  const [formData, setFormData] = useState<FormDataSignUp>(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState<string>("");

  //Handle Sign Up
  const handleSignUp = () => {
    const { fullName, email, password, confirmPassword } = formData;
    if (!email || !password || !fullName || !confirmPassword) {
      let message = errorMessage;
      message = "Please enter full name, email, password and confirm password. ";
      setErrorMessage(message);
      return;
    }
    if (password !== confirmPassword) {
      let message = errorMessage;
      message = "Password and Confirm Password is not match. ";
      setErrorMessage(message);
      return;
    }
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          user?.updateProfile({
            displayName: fullName,
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  //Handle error message
  const error = () => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };
  useEffect(() => {
    if (errorMessage) error();
  }, [errorMessage]);

  return (
    <Col style={styleBgRequire}>
      {contextHolder}
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
              type="text"
              name="fullName"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] min-w-[300px]"
            />
            <Input
              size="large"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] min-w-[300px] mt-[16px]"
            />
            <Input
              size="large"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] mt-[16px] min-w-[300px]"
            />
            <Input
              size="large"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] mt-[16px] min-w-[300px]"
            />
            <button
              onClick={handleSignUp}
              className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[24px] h-full w-full px-[24px] py-[16px] hover:opacity-70 rounded-[4px] leading-[24px] flex justify-center items-center mt-[36px]"
            >
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
