import React, { useState } from "react";
import styles from "./profile.module.css";

import HeaderProfile from "../components/ProfileSeller/Header";
import LeftBar from "../components/ProfileSeller/LeftBar";
import Main from "../components/ProfileSeller/Main";

export default function ProfileSeller() {
  const [nav, setNav] = useState("storeprofile");
  return (
    <>
      <HeaderProfile />
      <div className={styles.container}>
        <LeftBar
          nav={nav}
          setNav1={() => setNav("storeprofile")}
          setNav2={() => setNav("myproduct")}
          setNav3={() => setNav("selingproduct")}
          setNav4={() => setNav("myorder")}
          setNav5={() => setNav("ordercancel")}
        />
        <Main nav={nav} />
      </div>
    </>
  );
}
