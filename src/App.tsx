import React from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { useNavigate } from "react-router-dom";
import RequireSignIn from "./screens/RequireSignIn";

const App: React.FC = () => {
  const navigate = useNavigate();
  const user = null;

  return (
    <div className="App">{!user ? <RequireSignIn /> : <HomeScreen />}</div>
  );
};

export default App;
