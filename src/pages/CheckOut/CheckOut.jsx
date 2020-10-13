import React, { useState } from 'react';
import colors from '../../assets/colors.module.css';
import text from '../../assets/text.module.css';
import classname from '../../helpers/classJoiner';
import ModalChooseAddress from "../../components/CheckOut/ModalChooseAddress";
import ModalAddAddress from "../../components/Profile/ModalAddAddress";
import './Checkout.css';

const CheckOut = () => {
   const [cart, setCart] = useState([
      {
         id: 1,
         name: "Men's formal suit - Black",
         seller: "Zalora Cloth",
         quantity: 1,
         price: 20.0,
         selected: true,
         img: "https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1603065600&Signature=L2Go8ufnFXRu499YQ0SVJEFU8cW1i62rws4oM3PBc-WW3sCqbVw0AWsTnmqAMhltn5TMjdbR3EQjYS1QtRoZLSkt2Mh-AEfzKwMThJEAMb7oAI5dw1nCy1PVoEp9LQeco~tzGD5SJ9h8OzJgkoVGQ0YY1soJMVaC472GJxxHVZDfVctr2MEsi6EaHG-SqeNBVNHCcKM8EVDVhlTRT36AqDLeOSD10qWLtwInozO-8QW1w6hsZ2TmGRRXq4WjOaDU~8gLUUnxINBWB4m-FOwMs2DGjhpkQZQHe3B1fu0gIbL84W50DSX9X-w4PvTsTNFSgxsImCcSNvUX6Hsx5AavAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
         id: 2,
         name: "Men's Jacket jeans",
         seller: "Zalora Cloth",
         quantity: 1,
         price: 20.0,
         selected: true,
         img: "https://s3-alpha-sig.figma.com/img/d373/227e/1b077d067cc7eed45f8733fd75f5e570?Expires=1603065600&Signature=d40ckFqK4v2u2r8FCajf9MOpyiz7NQhmacmlyXyfsLXRPWu-5MQ8RndW9wtuCOVRc~kbqsGaqwrfcjB4AgWVrtxYHETotH8XBuP5~rKUpUYxq1jUSWz5fo2WcHZvYKWFaF05tyYRfWOQWF7JB-q~69HXXeWfK6S~KA4wHmlMEVwMY66Q6nSvHxAqrXejnpENTskeO1Bp5zeypr~kd7N8c5oWsC8UQUV0M6ff1hcyhjT2YbgIDcAp6Y3fOXdKH4Iefow8ChLuq~jnAAfvE8Y8JWAXwZ713jAVTUpYVV2gpP-f-IZWypkWsoVUSB~GSmuYZjQX6xZ8c98qewV0Qj38Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
   ]);

   const [showChooseAddress, setShowChooseAddress] = useState(false);
   const [showAddAddress, setShowAddAddress] = useState(false);

   // const handleSelectAll = (evt) => {

   // };

   // const handleSelectItem = (evt) => {
   //    console.log(evt.target);
   // };

   // const handleIncrease = () => {
   //    console.log(cart);
   // };

   return (
      <div className="container-main">
         <div className="container-title">
            <h1 className={classname(text.headline, "headline")}>Checkout</h1>
         </div>
         <div className="row">
            {/* left item */}
            <div className="col-lg-7">
               <h4 className={classname(text.text, "text-title")}>Shipping Adress</h4>
               <div className="row no-gutters shadow align-content-center container-select-all">
                  <div className="col">
                     <p className={classname(text.text, "text-title")}>Andreas Jane</p>
                     <p className="text-addres mb-4">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                     <button type="button" className={classname(colors.grayText, "btn btn-outline-secondary btn-choose-address")} onClick={() => setShowChooseAddress(true)}>Choose another address</button>
                  </div>
               </div>

               {/* list item */}
               {cart.map(item => {
                  return (
                     <div className="row no-gutters shadow align-items-center container-items">
                        <div className="col-2">
                           <img src={item.img} alt="" />
                        </div>
                        <div className="col">
                           <p className={classname(text.text, "text-title")}>{item.name}</p>
                           <p className={classname(colors.grayText, "text-seller")}>{item.seller}</p>
                        </div>
                        <div className="col-2">
                           <p href className={classname(text.text, colors.blackText, "text-title text-right")}>
                              {`$ ${item.price.toFixed(1)}`}
                           </p>
                        </div>
                     </div>
                  )
               })}

            </div>
            {/* right item */}
            <div className="col-lg-4 shadow container-summary ml-lg-auto">
               <div>
                  <p className={classname(text.text, "text-title mb-5")}>Shopping summary</p>
                  <div className="row no-gutters mb-4 align-items-center order-deliv">
                     <div className="col">
                        <p className={classname(text.text, colors.grayText, "text-title")}>Order</p>
                        <p className={classname(text.text, colors.grayText, "text-title")}>Delivery</p>
                     </div>
                     <div className="col">
                        <p className={classname(text.headline3, "text-title text-right")}>$ 40.0</p>
                        <p className={classname(text.headline3, "text-title text-right")}>$ 5.0</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                        <p className={classname(text.text, "text-title mb-5")}>Shopping summary</p>
                     </div>
                     <div className="col">
                        <p className={classname(text.headline3, colors.primaryText, "text-title text-right")}>$ 45.0</p>
                     </div>
                  </div>
                  <button className={classname("btn btn-danger btn-buy", colors.primary)}>Select payment</button>
               </div>
            </div>
         </div>
         <ModalChooseAddress
            show={showChooseAddress}
            onHide={() => setShowChooseAddress(false)}
            showAddAddress={() => setShowAddAddress(true)}
         />
         <ModalAddAddress
            show={showAddAddress}
            onHide={() => setShowAddAddress(false)}
         />
      </div >
   )
}

export default CheckOut;