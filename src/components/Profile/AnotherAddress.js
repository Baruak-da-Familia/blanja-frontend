import React from "react";
import { useSelector } from "react-redux";
import styles from "./anotheraddress.module.css";
import "./myprofile.module.css";

export default function AnotherAddress(props) {
  const { user } = useSelector((state) => state.auth);
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
        {user.address ? (
          <>
            <div className={styles.listaddress}>
              <h5 className={styles.listtitle}>
                Address {user.recipient_name}{" "}
              </h5>
              <p className={styles.detailaddres}>
                {`${user.address},${user.city_of_subdistrict}, ${user.recipient_telp_number},${user.postal_code}`}
              </p>
              <h5 className={styles.changeaddress}>Change address</h5>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

{
  /* Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181 */
}
