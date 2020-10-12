import React from "react";
import styles from "./main.module.css";
import MyProfile from "./MyProfile";
import AnotherAddress from "./AnotherAddress";
import MyOrder from "./MyOrder";
import ModalAddAddress from "./ModalAddAddress";
export default function Main(props) {
  return (
    <div className={styles.container}>
      {/* <MyProfile /> */}
      <AnotherAddress onShow={props.onShow} />
      {/* <MyOrder /> */}
    </div>
  );
}
