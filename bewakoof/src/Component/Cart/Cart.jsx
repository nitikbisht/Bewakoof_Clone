import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import style from "./cart.module.css"
import CartCard from './CartCard'
import Footerimg from './Footerimg';

export default function Cart() {
  const { cart,visited } = useSelector((state) => state.cart);
  console.log(cart);
  const [coupon,setCoupon]=useState(false)
  const[total,setTotal]=useState(0)
  const[sub,setSub]=useState(0)
  const handeltotal=(n)=>{
    setTotal(total=>total+n)
    console.log(n)
  }
  const handelsub=(n)=>{
    setSub(sub=>sub+n)
  }
  return (
    <div>

      <div id={style.cart_nav}>
        <Link to={"/"}>
        <img src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="logo" />
        </Link>
      </div>
      <hr />
      <h2>My bag <span>{cart.length} item(s)</span></h2>
      <div id={style.main_container}>
        
        <div id={style.left_container}>
          {cart.map((el,ind)=>{
            
            return <CartCard data={el} total={handeltotal} sub={handelsub} ind={ind}/>
          })}
        
        </div>

        <div id={style.right_container}>

          <div className={style.discount}>
            <p>
            Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200
            </p>
          </div>

          <div className={style.discount} >
            <p>
            Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
            </p>
          </div>

          <div id={style.coupon}>
            {coupon?<input placeholder='Coupon Code' style={{height:"25px",width:"80%"}}/>:<h5>Have a coupon/gift card ?</h5>}
            {coupon?<button >APPLY</button>:<button onClick={()=>{setCoupon(true)}}>APPLY</button>}
            
          </div>

          <div id={style.totalAmount}>

            <div id={style.price_summary}>
              <h4>
                PRICE SUMMARY 
              </h4>
            </div>

            <div id={style.price_calc}>
              <div>
                <p>Total MRP (Incl. of taxes)</p>
                <p>₹ {total}</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                <p>{sub>500?"Free":50}</p>
              </div>
              <div>
                <p>Bag Discount</p>
                <p>₹ -{total-sub}</p>
              </div>
              <div>
                <p>Subtotal</p>
                <p>₹ {sub}</p>
              </div>
            </div>

            <hr />

            <div id={style.final_price}>
              <div>
                <p>Total</p>
                <p>₹ {sub>500?sub:sub+50}</p>
              </div>
              <div>
                <button>
                  ADD ADDRESS
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
        <Footerimg/>
    </div>
  )
}
