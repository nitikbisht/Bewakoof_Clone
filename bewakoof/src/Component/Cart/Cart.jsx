import React from 'react'
import { useState ,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import style from "./cart.module.css"
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
  const[disc,setDisc]=useState("")
  const[dis,setDis]=useState(false)
  const[minus,setMinus]=useState(0)
  useEffect(()=>{
    
  },[coupon,total,sub])
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
            
            return <CartCard key={ind+1} data={el} total={handeltotal} sub={handelsub} ind={ind}/>
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
            {coupon?<input placeholder='Coupon Code' style={{height:"25px",width:"80%"}} disabled={dis?true:false} onChange={(e)=>{setDisc(e.target.value)}}/>:<h5>Have a coupon/gift card ?</h5>}
            {coupon?<button onClick={()=>{
              if(disc==="NEW200"){
                if(sub>999){
                  // setSub(sub=>sub-200)
                  setDis(true)
                  setMinus(200)
                }
              }
              else if(disc==="NEW20"){
                if(sub>499){
                  setMinus(Math.round(sub/5))
                  // setSub(sub=>sub-minus)
                  setDis(true)
                }
              }
            }} disabled={dis?true:false}>APPLY</button>:<button onClick={()=>{setCoupon(true)}}>APPLY</button>}
            
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
              <div>
                <p>Coupon Discount</p>
                <p>₹ -{minus}</p>
              </div>
            </div>

            <hr />

            <div id={style.final_price}>
              <div>
                <p>Total</p>
                <p>₹ {sub>500?sub-minus:sub+50-minus}</p>
              </div>
              <div>
                <button onClick={()=>navigate("/address")}>
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
