import React, { useState } from 'react';
import colors from '../../assets/colors.module.css';
import text from '../../assets/text.module.css';
import classname from '../../helpers/classJoiner';
import './MyBag.css';

const MyBag = () => {
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


   const handleSelectAll = (evt) => {

   };

   const handleSelectItem = (evt) => {
      console.log(evt.target);
   };

   const handleIncrease = () => {
      console.log(cart);
   };

   return (
      <div className="container-main">
         <div className="container-title">
            <h1 className={classname(text.headline, "headline")}>My bag</h1>
         </div>
         <div className="row">
            {/* left item */}
            <div className="col-lg-7">

               <div className="row no-gutters shadow align-content-center container-select-all">
                  <div className="col-1 align-self-center">
                     <input type="checkbox" name="selectAll" />
                  </div>
                  <div className="col">
                     <p className={classname(text.text, "text-title")}>{`Select all item (${cart.length} items selected)`}</p>
                  </div>
                  <div className="col-1">
                     <a href className={classname(text.text, colors.errorText, "text-title")}>Delete</a>
                  </div>
               </div>

               {/* list item */}
               {cart.map(item => {
                  return (
                     <div className="row no-gutters shadow align-items-center container-items">
                        <div className="col-1 align-self-center">
                           <input type="checkbox" name="items" onChange={handleSelectItem} />
                        </div>
                        <div className="col-2">
                           <img src={item.img} alt="" />
                        </div>
                        <div className="col">
                           <p className={classname(text.text, "text-title")}>{item.name}</p>
                           <p className={classname(colors.grayText, "text-seller")}>{item.seller}</p>
                        </div>
                        <div className="col-2">
                           <div className="row container-counter align-items-center justify-content-between">
                              <button className={classname(colors.lightGray, "btn btn-secondary btn-quantity")}>-</button>
                              <p>{item.quantity}</p>
                              <button className={classname(colors.white, "btn btn-light btn-quantity")} onClick={handleIncrease}>+</button>
                           </div>
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
                  <div className="row no-gutters mb-5 align-items-center">
                     <div className="col">
                        <p className={classname(text.text, colors.grayText, "text-title")}>Total Price</p>
                     </div>
                     <div className="col">
                        <p className={classname(text.headline3, "text-title text-right")}>$ 40.0</p>
                     </div>
                  </div>
                  <button className={classname("btn btn-danger btn-buy", colors.primary)}>Buy</button>
               </div>
            </div>
         </div>
      </div >
   )
}

export default MyBag;