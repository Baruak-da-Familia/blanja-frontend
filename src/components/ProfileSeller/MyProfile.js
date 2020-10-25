import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./myprofile.module.css";
import "./myprofile.module.css";
import userDefault from "../../assets/img/default.png";
import { updateProfileStoreCreator } from "../../redux/actions/auth";

export default function MyProfile(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [store, setDataStore] = useState({
    name: user.store_name ? user.store_name : "",
    email: user.email ? user.email : "",
    phone: user.phone_number ? user.phone_number : "-",
    desc: user.store_desc ? user.store_desc : "-",
    image: user.avatar ? user.avatar : "",
    imagePreviewUrl: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, desc, image } = store;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phone);
    formData.append("store_desc", desc);
    formData.append("avatar", image);
    console.log(...formData);
    dispatch(updateProfileStoreCreator(Number(user.id), formData));
  };
  const inputRef = React.useRef();
  const handleChangeFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setDataStore({
        ...store,
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
                  setDataStore({ ...store, name: e.target.value });
                }}
                value={store.name}
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
                  setDataStore({ ...store, email: e.target.value });
                }}
                value={store.email}
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
                  setDataStore({ ...store, phone: e.target.value });
                }}
                value={store.phone}
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
                  setDataStore({ ...store, desc: e.target.value });
                }}
                value={store.desc}
              />
            </div>
          </div>

          <div className={styles.itemform}>
            <div className={styles.label}>{""}</div>
            <div className={styles.inputcontainer}>
              <button
                className={styles.btnsave}
                onClick={(e) => {
                  handleSubmit(e);
                }}>
                Save
              </button>
            </div>
          </div>
        </div>
        {/* ImageProfile */}
        <div className={styles.imagecontainer}>
          <div className={styles.boximage}>
            <div className={styles.containerimage}>
              <img
                className={styles.imageprofile}
                src={
                  store.imagePreviewUrl
                    ? store.imagePreviewUrl
                    : user.avatar
                    ? `http://localhost:8000${user.avatar}`
                    : userDefault
                }
                alt=''
              />
            </div>
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
