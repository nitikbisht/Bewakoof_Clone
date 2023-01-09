import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import style from "./Payment.module.css"
import CartCard from './CartCard'
import Footerimg from './Footerimg';
import {Store} from "../../landing/Store/Store"
export default function Cart() {
    const navigate = useNavigate();
  const { cart,visited } = useSelector((state) => state.cart);
  console.log(visited);
  // Store.subscribe()
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
      
      <div id={style.main_container}>
        
        <div id={style.left_container} >
        <div className='form'>
        <h2>Choose your payment method</h2>
        <div style={{width:"80%",margin:"auto",display:"flex",height:"400px",border:"1px solid lightgrey"}}>
          <div style={{width:"30%",display:"flex",flexDirection:"column",height:"100%"}}>
            <div style={{height:"20%",border:"1px solid lightgrey",textAlign:"center",cursor:"pointer"}}><h4>Credit Card</h4></div>
            <div style={{height:"20%",border:"1px solid lightgrey",textAlign:"center",cursor:"pointer"}}><h4>Debit Card</h4></div>
            <div style={{height:"20%",border:"1px solid lightgrey",textAlign:"center",cursor:"pointer"}}><h4>Cash On Delivery</h4></div>
            <div style={{height:"20%",border:"1px solid lightgrey",textAlign:"center",cursor:"pointer"}}><h4>UPI</h4></div>
            <div style={{height:"20%",border:"1px solid lightgrey",textAlign:"center",cursor:"pointer"}}><h4>Net Banking</h4></div>
          </div>
          <div>pay</div>
        </div>

        </div>
            <div style={{display:"none"}}>

          {cart.map((el,ind)=>{
              
              return <CartCard key={ind+1} data={el} total={handeltotal} sub={handelsub} ind={ind}/>
            })}
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
                <p>₹ {total}</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                {sub==0?<p>0</p>:<p>{sub>500?"Free":50}</p>}
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
              <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                <p>Total</p>
                {sub==0?<p>0</p>:<p>₹ {sub>500?sub:sub+50}</p>}
              </div>
            </div>

          </div>

        </div>

      </div>
        {/* <Footerimg/> */}
    </div>
  )
}
