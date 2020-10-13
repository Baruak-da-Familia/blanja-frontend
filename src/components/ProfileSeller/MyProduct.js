import React from "react";
import { Table } from "react-bootstrap";
import styles from "./myproduct.module.css";
import empty from "../../assets/image/emptyproduct.png";
import sort from "../../assets/image/sort.png";

export default function MyProduct() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>My product</h6>
        <div className={styles.menu}>
          <h3 className={styles.menuactive}>All items</h3>
          <h3 className={styles.menuinactive}>Sold out</h3>
          <h3 className={styles.menuinactive}>Archieved</h3>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.search}>
          <i
            style={{ color: "#d4d4d4" }}
            className='fa fa-search'
            aria-hidden='true'></i>
          <input className={styles.input} type='search' />
        </div>

        <div className={styles.product}>
          <Table striped border hover>
            <thead
              style={{ backgroundColor: "#F7F7F7", border: "none" }}
              className={styles.headertable}>
              <tr>
                <th style={{ width: "70%" }}>
                  Product name <img src={sort} />{" "}
                </th>
                <th style={{ width: "15%" }}>
                  Price <img src={sort} />
                </th>
                <th style={{ width: "15%" }}>
                  Stock <img src={sort} />
                </th>
              </tr>
            </thead>
            <tbody borderless>
              {/* <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr> */}
            </tbody>
          </Table>
          <img className={styles.empty} src={empty} />
        </div>
      </div>
      {/* Content */}
      {/* ............... */}
    </div>
  );
}
