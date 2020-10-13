import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import colors from '../../assets/colors.module.css';
import text from '../../assets/text.module.css';
import classname from '../../helpers/classJoiner';
import './ModalChooseAddress.css';

const ModalChooseAddress = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton className="no-border" />
         <Modal.Body className="no-border">
            <div className="container-modal">
               <div>
                  <h4 className="text-top">Choose another address</h4>
               </div>
               <div className="add-address" onClick={props.showAddAddress}>
                  <h4 className={classname(colors.grayText, "text-add-addres")}>Add new address</h4>
               </div>
               <div className="container-address-list">
                  <p className={classname(text.text, "text-title")}>Andreas Jane</p>
                  <p className="text-addres mb-4">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                  <a href="#" className={classname(colors.primaryText, text.text, "text-title")}>Change address</a>
               </div>
            </div>
         </Modal.Body>
      </Modal>
   )
}

export default ModalChooseAddress;
