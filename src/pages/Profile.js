import React, { useState } from "react";
import styles from "./profile.module.css";

import HeaderProfile from "../components/Profile/Header";
import LeftBar from "../components/Profile/LeftBar";
import Main from "../components/Profile/Main";
import ModalAddAddress from "../components/Profile/ModalAddAddress";

export default function Profile() {
  const [nav, setNav] = useState("myprofile");
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <HeaderProfile />
      <div className={styles.container}>
        <LeftBar
          nav={nav}
          setNav1={() => setNav("myprofile")}
          setNav2={() => setNav("shippingaddress")}
          setNav3={() => setNav("myorder")}
        />
        <Main nav={nav} onShow={() => setModalShow(true)} />
        <ModalAddAddress show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}
