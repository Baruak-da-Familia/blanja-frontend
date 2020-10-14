import React from "react";
import styles from "./myorder.module.css";

export default function MyOrder() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>My order</h6>
        <div className={styles.menu}>
          <h3 className={styles.menuactive}>All items</h3>
          <h3 className={styles.menuinactive}>Not yet paid</h3>
          <h3 className={styles.menuinactive}>Packed</h3>
          <h3 className={styles.menuinactive}>Sent</h3>
          <h3 className={styles.menuinactive}>Completed</h3>
          <h3 className={styles.menuinactive}>Order cancel</h3>
        </div>
      </div>
      <div className={styles.content}>
        <h3>Content</h3>
      </div>
      {/* Content */}
      {/* ............... */}
    </div>
  );
}
