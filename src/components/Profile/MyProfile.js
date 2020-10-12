import React from "react";
import styles from "./myprofile.module.css";
import "./myprofile.module.css";
import bear from "../../assets/image/bear.jpg";

export default function MyProfile() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>My Profile</h6>
        <p className={styles.subtitle}>Manage your profile information</p>
      </div>

      {/* FormContainer */}
      <div className={styles.formcontainer}>
        {/* Form */}
        <div className={styles.form}>
          <div className={styles.itemform}>
            <div className={styles.label}>Name</div>
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
            <div className={styles.label}>Gender</div>
            <div className={styles.radioselectcontainer}>
              <input
                id='male'
                value='male'
                name='gender'
                type='radio'
                className={styles.radioselect}
                placeholder=''
              />
              <label className={styles.labelradio} for='male'>
                Male
              </label>

              <input
                id='female'
                value='female'
                name='gender'
                type='radio'
                className={styles.radioselect}
                placeholder=''
              />
              <label className={styles.labelradio} for='male'>
                Female
              </label>
            </div>
          </div>
          <div className={styles.itemform}>
            <div className={styles.label}>Date of Birth</div>
            <div className={styles.inputcontainer}>
              <select className={styles.select} name='level_id'>
                <optgroup label='Login as...'>
                  <option value='1'>Admin</option>
                  <option value='2'>Cashier</option>
                </optgroup>
              </select>
              <select className={styles.select} name='level_id'>
                <optgroup label='Login as...'>
                  <option value='1'>Admin</option>
                  <option value='2'>Cashier</option>
                </optgroup>
              </select>
              <select className={styles.select} name='level_id'>
                <optgroup label='Login as...'>
                  <option value='1'>Admin</option>
                  <option value='2'>Cashier</option>
                </optgroup>
              </select>
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
            <button className={styles.btnedit}>Edit image</button>
          </div>
        </div>
      </div>
    </div>
  );
}
