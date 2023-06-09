import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import RequireSignIn from "./screens/RequireSignIn";
import { auth } from "./firebase";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { signIn, signOut, selectUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import { User } from "./models/models";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          signIn({
            id: userAuth.uid,
            email: userAuth.email,
            fullName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            phoneNumber: userAuth.phoneNumber,
          })
        );
      } else {
        //Logged out
        dispatch(signOut());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">{!user ? <RequireSignIn /> : <HomeScreen />}</div>
  );
};

export default App;
