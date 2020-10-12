import React from "react";
import styles from "./anotheraddress.module.css";
import "./myprofile.module.css";
import bear from "../../assets/image/bear.jpg";

export default function AnotherAddress(props) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>Choose another address</h6>
        <p className={styles.subtitle}>Manage your shipping address</p>
      </div>

      {/* FormContainer */}
      <div className={styles.addresscontainer}>
        <div className={styles.addnewaddress}>
          <h5 className={styles.addtext} onClick={props.onShow}>
            Add new address
          </h5>
        </div>
        <div className={styles.listaddress}>
          <h5 className={styles.listtitle}>Address Jane</h5>
          <p className={styles.detailaddres}>
            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181
          </p>
          <h5 className={styles.changeaddress}>Change address</h5>
        </div>
      </div>
    </div>
  );
}
