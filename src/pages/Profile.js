import React from "react";
import "./profile.css";

import HeaderProfile from "../components/Profile/Header";
import LeftBar from "../components/Profile/LeftBar";
import Main from "../components/Profile/Main";

export default function Profile() {
  return (
    <>
      <HeaderProfile />
      <div className='container'>
        <LeftBar />
        <Main />
      </div>
    </>
  );
}
