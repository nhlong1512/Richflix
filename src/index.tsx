import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import NotFoundScreen from "./screens/NotFoundScreen";
import App from "./App";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: "/sign-in",
    element: <SignInScreen />,
  },
  {
    path: "/sign-up",
    element: <SignUpScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/sign-in" element={<SignInScreen />}></Route>
        <Route path="/sign-up" element={<SignUpScreen />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
