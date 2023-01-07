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
            <h5>
              Have a coupon/gift card ?
            </h5>
            <button>APPLY</button>
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
                <p>₹ 11845</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                <p>FREE</p>
              </div>
              <div>
                <p>Bag Discount</p>
                <p>₹ -500</p>
              </div>
              <div>
                <p>Subtotal</p>
                <p>₹ 5000</p>
              </div>
            </div>

            <hr />

            <div id={style.final_price}>
              <div>
                <p>Total</p>
                <p>₹ 5000</p>
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

    </div>
  )
}
