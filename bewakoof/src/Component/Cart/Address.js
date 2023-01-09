import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import style from "./Address.module.css"
import CartCard from './CartCard'

export default function Cart() {
    const navigate = useNavigate();
    var data = JSON.parse(localStorage.getItem("detail")); 
  return (
    <div>

      <div id={style.cart_nav}>
        <Link to={"/"}>
        <img src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="logo" />
        </Link>
      </div>
      <hr />
      <div id={style.main_container}>
        
        <div id={style.left_container} >
        <div className={style.form}>
        <h2>SHIPPING ADDRESS</h2>
        <div ><input placeholder='First Name'/><input placeholder='Last Name'/></div>
        <div ><input placeholder='Address'/></div>
        <div ><input placeholder='City'/><input placeholder='State'/><input placeholder='Pin Code'/></div>
        <div ><input placeholder='Phone'/></div>
        <div ><Link to={"/bag"} style={{textDecoration:"underline white",color:"red"}}> Return</Link><Link to={'/payment'}style={{textDecoration:"underline black"}} >CONTINUE TO PAYMENT</Link></div>
        </div>
        
        </div>

        <div id={style.right_container}>
          <div id={style.totalAmount}>
            <div id={style.price_summary}>
              <h4>
                PRICE SUMMARY 
              </h4>
            </div>

            <div id={style.price_calc}>
              <div>
                <p>Total MRP (Incl. of taxes)</p>
                <p>₹ {data.mrp}</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                <p>{data.shipping}</p>
              </div>
              <div>
                <p>Bag Discount</p>
                <p>₹ -{data.bag}</p>
              </div>
              <div>
                <p>Subtotal</p>
                <p>₹ {data.sub}</p>
              </div>
              <div>
                <p>Coupon Discount</p>
                <p>₹ -{data.coupon}</p>
              </div>
            </div>

            <hr />

            <div id={style.final_price}>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                <p>Total</p>
              <p>₹ {data.total}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
        {/* <Footerimg/> */}
    </div>
  )
}
