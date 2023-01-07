import React from 'react' ;
import style from "./CartCard.module.css" ;

export default function CartCard() {
  return (
    <div id={style.card_box}>
      <div className={style.card}>

        <div id={style.prod_text}>
            <p>Mens jacket</p>
            <div id={style.price}>
              <p>₹ 999</p> 
              <strike>₹ 1800</strike>
            </div>
            <p>You saved ₹1800!</p>
            <div id={style.quan}>
              <button>-</button>1<button>+</button>
            </div>
        </div>

        <div id={style.imgDiv}>
            <img src="https://images.bewakoof.com/t320/men-s-black-windcheater-368587-1656184892-1.jpg" width="150px" alt="jacket" />
        </div>

      </div>

      <div id={style.action}>
        <button>remove</button>
        <button>move to wishllist</button>
      </div>
    </div>
  )
}
