import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.css";

export default function ModalAddAddress(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton style={{ border: "none" }}>
        <Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.container}>
        <h4 className={styles.title}>Add new address</h4>
        <div className={styles.content}>
          <div className={styles.iteminput}>
            <div className={styles.contentinput}>
              <label className={styles.label} for='address'>
                Save address as (ex : home address, office address)
              </label>
              <input id='address' className={styles.input} />
            </div>
          </div>

          <div className={styles.iteminput}>
            <div className={styles.contentinput}>
              <label className={styles.label} for='recipients'>
                Recipient’s name
              </label>
              <input id='recipients' className={styles.input} />
            </div>
            <div className={styles.space}></div>
            <div className={styles.contentinput}>
              <label className={styles.label} for='tlp'>
                Recipient's telephone number
              </label>
              <input id='tlp' className={styles.input} />
            </div>
          </div>

          <div className={styles.iteminput}>
            <div className={styles.contentinput}>
              <label className={styles.label} for='address'>
                Address
              </label>
              <input id='address' className={styles.input} />
            </div>
            <div className={styles.space}></div>
            <div className={styles.contentinput}>
              <label className={styles.label} for='postal'>
                Postal code
              </label>
              <input id='postal' className={styles.input} />
            </div>
          </div>

          <div className={styles.iteminput}>
            <div className={styles.contentinput}>
              <label className={styles.label} for='city'>
                City or subdistrict
              </label>
              <input id='city' className={styles.input} />
            </div>
            <div className={styles.space}></div>
            <div className={styles.contentinput}></div>
          </div>

          <div className={styles.iteminput}>
            <input className={styles.itemcheckbox} type='checkbox' id='city' />
            <label className={styles.label} for='city'>
              City or subdistrict
            </label>
          </div>

          <div className={styles.iteminput}>
            <div className={styles.contentinput}></div>
            <div className={styles.space}></div>
            <div className={styles.contentbtn}>
              <button onClick={props.onHide} className={styles.btncancel}>
                Cancel
              </button>
              <button className={styles.btnsave}>Save</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size='lg'
//       aria-labelledby='contained-modal-title-vcenter'
//       centered>
//       <Modal.Header closeButton>
//         <Modal.Title id='contained-modal-title-vcenter'>
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant='primary' onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }
