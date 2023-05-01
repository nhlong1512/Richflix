import React from "react";
import { Row, Col } from "antd";

import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { Route, Routes } from "react-router-dom";
import ProfileScreen from "./ProfileScreen";

const HomeScreen: React.FC = () => {
  return (
    <Row>
      <Col span={24}>
        <NavBar />
        <Content />
      </Col>
    </Row>
  );
};

export default HomeScreen;
