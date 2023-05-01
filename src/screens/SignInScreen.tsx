import React, { useEffect, useState } from "react";
import { Col, Form, Input, message } from "antd";
import LogoNetflix from "../assets/images/Logo.png";
import BgRequire from "../assets/images/BgRequire.jpg";
import { useNavigate } from "react-router-dom";
import { FormDataSignIn } from "../models/models";
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

const SignInScreen:React.FC = () => {
  const navigate = useNavigate();
  const initialState: FormDataSignIn = {
    email: "",
    password: "",
  };
  const [messageApi, contextHolder] = message.useMessage();

  //Handle change formData Sign in
  const [formData, setFormData] = useState<FormDataSignIn>(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState<string>("");
  //Handle Sign In
  const handleSignIn = () => {
    const { email, password } = formData;
    if (!email || !password) {
      let message = errorMessage;
      message = "Please enter email and password. ";
      setErrorMessage(message);
      return;
    }
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          let message = errorMessage;
          message = "The user name or password is incorrect.";
          setErrorMessage(message);
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
                onClick={() => navigate("/sign-up")}
                className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[4px] leading-[24px]"
              >
                Sign Up
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
              Sign In
            </h3>
            <Input
              size="large"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] min-w-[300px]"
            />
            <Input
              size="large"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              className="font-NetflixSansMedium font-[500] px-[8px] py-[10px] rounded-[4px] mt-[16px] min-w-[300px]"
            />
            <button
              onClick={handleSignIn}
              className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[24px] h-full w-full px-[24px] py-[16px] hover:opacity-70 rounded-[4px] leading-[24px] flex justify-center items-center mt-[36px]"
            >
              Sign In
            </button>
            <p className="font-NetflixSansMedium text-white mb-0">
              <span className="opacity-50">New To Netflix ? </span>
              &nbsp;
              <span
                onClick={() => navigate("/sign-up")}
                className="font-NetflixSansMedium hover:underline hover:opacity-70"
              >
                Sign Up Now
              </span>
            </p>
          </Form>
        </Col>
      </Col>
    </Col>
  );
};

export default SignInScreen;
