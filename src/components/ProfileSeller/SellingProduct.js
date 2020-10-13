import React from "react";
import styles from "./sellingproduct.module.css";
import "./myprofile.module.css";
import main from "../../assets/image/mainphoto.png";
import secondary from "../../assets/image/secondaryphoto.png";
import formattext from "../../assets/image/formattext.png";

export default function SellingProduct() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        width: "100%",
      }}>
      {/* INVENTORY */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h6 className={styles.title}>Inventory</h6>
        </div>

        {/* FormContainer */}
        <div className={styles.formcontainer}>
          <div className={styles.form}>
            <label className={styles.label}>Name of goods</label>
            <input className={styles.input} />
          </div>
        </div>
      </div>

      {/* ITEM DETAILS */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h6 className={styles.title}>Item details</h6>
        </div>

        {/* FormContainer */}
        <div className={styles.formcontainer}>
          <div className={styles.form}>
            <label className={styles.label}>Unit price</label>
            <input className={styles.input} />
          </div>
          <div className={styles.form}>
            <label className={styles.label}>Stock</label>
            <input className={styles.input} />
          </div>
          <div className={styles.form}>
            <label className={styles.label}>Stock</label>
            <div className={styles.radioselect}>
              <input
                type='radio'
                value='New'
                name='condition'
                style={{ marginRight: "5px", marginBottom: "18px" }}
              />
              <p className={styles.valueradio}>New</p>
              <input
                style={{
                  marginLeft: "25px",
                  marginRight: "5px",
                  backgroundColor: "red",
                  marginBottom: "18px",
                }}
                type='radio'
                value='Old'
                name='condition'
              />
              <p className={styles.valueradio}>Old</p>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h6 className={styles.title}>Photo of goods</h6>
        </div>

        {/* FormContainer */}
        <div className={styles.formcontainer}>
          <div className={(styles.form, styles.formcontainer_img)}>
            <div className={styles.content_img}>
              <div className={styles.main_img}>
                <img src={main} alt='' />
              </div>
              <div className={styles.secondary_img}>
                <img src={secondary} alt='' />
              </div>
              <div className={styles.secondary_img}>
                <img src={secondary} alt='' />
              </div>
              <div className={styles.secondary_img}>
                <img src={secondary} alt='' />
              </div>
              <div className={styles.secondary_img}>
                <img src={secondary} alt='' />
              </div>
            </div>
            <div className={styles.edit_img}>
              <button className={styles.btnupload}>Upload image</button>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h6 className={styles.title}>Description</h6>
        </div>

        {/* FormContainer */}
        <div className={styles.formcontainer}>
          <div className={(styles.form, styles.formcontainer_description)}>
            <img src={formattext} alt='' />
            <textarea className={styles.content_description} />
          </div>
        </div>
      </div>
      <button className={styles.btnsell}>Sell</button>
    </div>
  );
}
