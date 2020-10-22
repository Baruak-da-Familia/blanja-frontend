import React, { useState } from "react";
import styles from "./myprofile.module.css";
import "./myprofile.module.css";
import bear from "../../assets/image/bear.jpg";

export default function MyProfile() {
  const [biodata, setBiodata] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
    image: "",
    imagePreviewUrl: "",
  });
  const inputRef = React.useRef();
  const handleChangeFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    // setBiodata({ ...biodata, image: file });

    reader.onloadend = () => {
      setBiodata({
        ...biodata,
        image: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={(e) => handleChangeFile(e)}
        ref={inputRef}
        type='file'
        className={styles.hiddeninput}
      />
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
              <input
                className={styles.input}
                placeholder=''
                onChange={(e) => {
                  setBiodata({ ...biodata, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className={styles.itemform}>
            <div className={styles.label}>Email</div>
            <div className={styles.inputcontainer}>
              <input
                className={styles.input}
                placeholder=''
                onChange={(e) => {
                  setBiodata({ ...biodata, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className={styles.itemform}>
            <div className={styles.label}>Phone Number</div>
            <div className={styles.inputcontainer}>
              <input
                className={styles.input}
                placeholder=''
                onChange={(e) => {
                  setBiodata({ ...biodata, phone: e.target.value });
                }}
              />
            </div>
          </div>

          <div className={styles.itemform}>
            <div className={styles.label}>Store description</div>
            <div className={styles.inputcontainer}>
              <textarea
                rows={10}
                className={styles.input}
                style={{
                  height: "120px",
                  fontSize: "16px",
                  paddingLeft: "7px",
                }}
                onChange={(e) => {
                  setBiodata({ ...biodata, desc: e.target.value });
                }}
              />
            </div>
          </div>

          <div className={styles.itemform}>
            <div className={styles.label}>{""}</div>
            <div className={styles.inputcontainer}>
              <button
                className={styles.btnsave}
                onClick={() => {
                  console.log(biodata);
                }}>
                Save
              </button>
            </div>
          </div>
        </div>
        {/* ImageProfile */}
        <div className={styles.imagecontainer}>
          <div className={styles.boximage}>
            <img
              className={styles.imageprofile}
              src={biodata.imagePreviewUrl}
              alt=''
            />
            <button
              className={styles.btnedit}
              onClick={() => {
                inputRef.current.click();
              }}>
              Select image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
