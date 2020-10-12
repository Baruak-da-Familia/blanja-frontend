import React from "react";
import styles from "./leftbar.module.css";
import user from "../../assets/image/bear.jpg";
export default function LeftBar() {
  return (
    <div className={styles.container}>
      <div className={styles.infoitem}>
        <div className={styles.profile}>
          <img className={styles.image} src={user} alt='' />
          <div>
            <p className={styles.name}>Siapa Ya</p>
            <p className={styles.edit}>
              <i
                style={{ marginRight: "10px" }}
                className='fa fa-pencil'
                aria-hidden='true'></i>
              Change profile
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <span className='fa-stack'>
            <i
              className='fa fa-circle fa-stack-2x'
              style={{ color: "#456BF3" }}></i>
            <i className='fa fa-user-o fa-stack-1x fa-inverse'></i>
          </span>
          <p className={styles.active}>My account</p>
        </div>

        <div className={styles.info}>
          <span className='fa-stack'>
            <i
              className='fa fa-circle fa-stack-2x'
              style={{ color: "#F36F45" }}></i>
            <i className='fa fa-map-marker fa-stack-1x fa-inverse'></i>
          </span>
          <p className={styles.inactive}>Snipping address</p>
        </div>

        <div className={styles.info}>
          <span className='fa-stack'>
            <i
              className='fa fa-circle fa-stack-2x'
              style={{ color: "#F3456F" }}></i>
            <i className='fa fa fa-square-o fa-stack-1x fa-inverse'></i>
          </span>
          <p className={styles.inactive}>My order</p>
        </div>
      </div>
    </div>
  );
}
