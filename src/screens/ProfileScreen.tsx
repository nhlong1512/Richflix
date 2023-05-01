import { Col } from "antd";
import React from "react";
import { useAppSelector } from "../app/hooks";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import Profile from "../assets/images/ProfileIMG.png";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.currentUser);
  //Handle Sign Out
  const clickSignOut = () => {
    auth.signOut();
    navigate("/")
  }

  return (
    <Col span={24}>
      <NavBar />
      {/* <Content /> */}
      <div className="bg-[#111] h-screen flex justify-center items-center">
        <div className="flex flex-col w-[600px] gap-[12px] ">
          <h3 className="font-NetflixSansLight text-[40px] leading-[60px] text-white font-[300] m-0">
            Edit Profile
          </h3>
          <div className="flex gap-[16px] w-full">
            <div>
              <img src={Profile} alt="user" className="w-[70px]" />
            </div>
            <div className="w-full">
              <div className="font-NetflixSansMedium px-[16px] text-white text-[12px] bg-[#b9b6b5] py-[10px]">
                {user?.email}
              </div>
              <div>
                <h3 className="font-NetflixSansMedium font-[300] text-white text-[16px] my-[16px]">
                  Plans (Current Plan: premium)
                </h3>
                <p className="font-NetflixSansMedium font-[300] text-[#999] text-[12px]">
                  Renewal Date: 04/04/2023
                </p>
              </div>
              <div className="flex flex-col gap-[36px]">
                <div className="flex justify-between">
                  <div>
                    <p className="font-NetflixSansMedium text-[#999] m-0">
                      Netflix Standard
                    </p>
                    <p className="font-NetflixSansMedium text-[#999] m-0 text-[10px]">
                      1080p
                    </p>
                  </div>
                  <button className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[2px] leading-[24px]">
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-NetflixSansMedium text-[#999] m-0">
                      Netflix Basic
                    </p>
                    <p className="font-NetflixSansMedium text-[#999] m-0 text-[10px]">
                      480p
                    </p>
                  </div>
                  <button className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[2px] leading-[24px]">
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-NetflixSansMedium text-[#999] m-0">
                      Netflix Premium
                    </p>
                    <p className="font-NetflixSansMedium text-[#999] m-0 text-[10px]">
                      4K+HDR
                    </p>
                  </div>
                  <button className="font-NetflixSansMedium text-white bg-[#b9b6b5] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[2px] leading-[24px]">
                    Current Package
                  </button>
                </div>
              </div>
              <div>
                <button
                onClick = {clickSignOut}
                 className="font-NetflixSansMedium text-white bg-[#e50914] cursor-pointer border-none font-[500] text-[14px] px-[16px] py-[4px] hover:opacity-70 rounded-[2px] leading-[24px] w-full mt-[48px]">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProfileScreen;
