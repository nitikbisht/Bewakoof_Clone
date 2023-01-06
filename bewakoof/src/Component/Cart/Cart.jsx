import React from 'react'
import style from "./cart.module.css"
import CartCard from './CartCard'

export default function Cart() {
  return (
    <div>

      <div id={style.cart_nav}>
        <img src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="logo" />
      </div>
      <hr />
      <h2>My bag <span>5 items</span></h2>
      <div id={style.main_container}>
        
        <div id={style.left_container}>
        <CartCard/>
        </div>

        <div id={style.right_container}>

        </div>

      </div>

    </div>
  )
}
