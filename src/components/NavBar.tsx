import React, { useState, useEffect } from "react";
import { Col } from "antd";
import LogoNetflix from "../assets/images/Logo.png";
import Profile from "../assets/images/ProfileIMG.png";
import { auth } from "../firebase";
import { signOut } from "../features/userSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [show, handleShow] = useState<boolean>(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const onClickUser = () => {
    navigate("/profile");
    // await auth.signOut();
    // dispatch(signOut);
  };

  const onClickHome = () => {
    navigate("/");
  }


  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <Col
      span={24}
      className={`${
        show && "bg-[#000]"
      } fixed top-[0px] w-full z-[100] transition-all duration-500 ease-in`}
    >
      <Col
        span={22}
        offset={1}
        className="flex justify-between py-[24px] cursor-pointer"
      >
        <Col>
          <img src={LogoNetflix} alt="logo" onClick = {onClickHome} />
        </Col>
        <Col>
          <img src={Profile} alt="imgUser" onClick={onClickUser} />
        </Col>
      </Col>
    </Col>
  );
};

export default NavBar;
