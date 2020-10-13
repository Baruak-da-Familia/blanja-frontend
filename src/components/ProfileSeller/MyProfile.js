import React from "react";
import styles from "./myprofile.module.css";
import "./myprofile.module.css";
import bear from "../../assets/image/bear.jpg";

export default function MyProfile() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>My profile store</h6>
        <p className={styles.subtitle}>Manage your profile information</p>
      </div>

      {/* FormContainer */}
      <div className={styles.formcontainer}>
        {/* Form */}
        <div className={styles.form}>
          <div className={styles.itemform}>
            <div className={styles.label}>Store name</div>
            <div className={styles.inputcontainer}>
              <input className={styles.input} placeholder='' />
            </div>
          </div>
          <div className={styles.itemform}>
            <div className={styles.label}>Email</div>
            <div className={styles.inputcontainer}>
              <input className={styles.input} placeholder='' />
            </div>
          </div>
          <div className={styles.itemform}>
            <div className={styles.label}>Phone Number</div>
            <div className={styles.inputcontainer}>
              <input className={styles.input} placeholder='' />
            </div>
          </div>

          <div className={styles.itemform}>
            <div className={styles.label}>Store description</div>
            <div className={styles.inputcontainer}>
              <textarea
                rows={10}
                className={styles.input}
                style={{ height: "120px" }}
              />
            </div>
          </div>

          <div className={styles.itemform}>
            <div className={styles.label}>{""}</div>
            <div className={styles.inputcontainer}>
              <button className={styles.btnsave}>Save</button>
            </div>
          </div>
        </div>
        {/* ImageProfile */}
        <div className={styles.imagecontainer}>
          <div className={styles.boximage}>
            <img className={styles.imageprofile} src={bear} alt='' />
            <button className={styles.btnedit}>Select image</button>
          </div>
        </div>
      </div>
    </div>
  );
}
