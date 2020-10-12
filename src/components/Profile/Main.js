import React from "react";
import styles from "./main.module.css";
import MyProfile from "./MyProfile";
import AnotherAddress from "./AnotherAddress";
export default function Main() {
  return (
    <div className={styles.container}>
      {/* <MyProfile /> */}
      <AnotherAddress />
    </div>
  );
}
