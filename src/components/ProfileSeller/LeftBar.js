import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./leftbar.module.css";
import user from "../../assets/image/bear.jpg";
import { Accordion, Card } from "react-bootstrap";
import { getProductBySellerIdCreator } from "../../redux/actions/product";

export default function LeftBar(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { nav, setNav1, setNav2, setNav3, setNav4, setNav5 } = props;
  return (
    <div className={styles.container}>
      <div className={styles.infoitem}>
        <div className={styles.profile}>
          <img className={styles.image} src={user} alt='' />
          <div className={styles.nameinfo}>
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

        <Accordion defaultActiveKey='0'>
          <Card
            style={{
              backgroundColor: "#ffffff",
              border: "none",
            }}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='0'
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                border: "none",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}>
              <span className='fa-stack'>
                <i
                  className='fa fa-circle fa-stack-2x'
                  style={{ color: "#456BF3" }}></i>
                <i className='fa fa-home fa-stack-1x fa-inverse'></i>
              </span>
              <p
                onClick={() => {
                  setNav1();
                  // dispatch(getProductBySellerIdCreator(Number(user.id)));
                }}
                className={
                  nav === "storeprofile" ? styles.active : styles.inactive
                }>
                Store
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "40px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  cursor: "pointer",
                }}>
                <p
                  onClick={setNav1}
                  className={
                    nav === "storeprofile" ? styles.active : styles.inactive
                  }>
                  Store profile
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card
            style={{
              backgroundColor: "#ffffff",
              border: "none",
            }}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='1'
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                border: "none",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}>
              <span className='fa-stack'>
                <i
                  className='fa fa-circle fa-stack-2x'
                  style={{ color: "#F36F45" }}></i>
                <i className='fa fa-cube fa-stack-1x fa-inverse'></i>
              </span>
              <p
                // onClick={setNav2}
                onClick={() => {
                  setNav2();
                  dispatch(getProductBySellerIdCreator(Number(user.id)));
                }}
                className={
                  nav === "myproduct" || nav === "selingproduct"
                    ? styles.active
                    : styles.inactive
                }>
                Product
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "40px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  cursor: "pointer",
                }}>
                <p
                  onClick={setNav2}
                  className={
                    nav === "myproduct" ? styles.active : styles.inactive
                  }>
                  My products
                </p>
                <p
                  onClick={setNav3}
                  className={
                    nav === "selingproduct" ? styles.active : styles.inactive
                  }>
                  Selling products
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card
            style={{
              backgroundColor: "#ffffff",
              border: "none",
            }}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='2'
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                border: "none",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}>
              <span className='fa-stack'>
                <i
                  className='fa fa-circle fa-stack-2x'
                  style={{ color: "#F3456F" }}></i>
                <i className='fa fa fa-shopping-cart fa-stack-1x fa-inverse'></i>
              </span>
              <p
                onClick={setNav4}
                className={
                  nav === "myorder" || nav === "ordercancel"
                    ? styles.active
                    : styles.inactive
                }>
                Order
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "40px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  cursor: "pointer",
                }}>
                <p
                  onClick={setNav4}
                  className={
                    nav === "myorder" ? styles.active : styles.inactive
                  }>
                  My order
                </p>
                <p
                  onClick={setNav5}
                  className={
                    nav === "ordercancel" ? styles.active : styles.inactive
                  }>
                  Order cancel
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
