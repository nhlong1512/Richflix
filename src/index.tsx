import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NotFoundScreen from './screens/NotFoundScreen';
import App from './App';
import SignInScreen from './screens/SignInScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundScreen />,
  },
  {
    path: "/sign-in",
    element: <SignInScreen/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <RouterProvider router = {router}/>
);
