import React from 'react' ;
import { useEffect } from 'react';
import { useState } from 'react';
import style from "./CartCard.module.css" ;

export default function CartCard({data,total,sub,ind}) {
  const[quan,setQuan]=useState(1)
  useEffect(()=>{
    total(data.originalprice)
    sub(data.price)
  },[])
  return (
    <div id={style.card_box}>
      <div className={style.card}>

        <div id={style.prod_text}>
            <p>{data.name}</p>
            <div id={style.price}>
              <p>₹ {data.price}</p> 
              <strike>₹ {data.originalprice}</strike>
            </div>
            <p>You saved ₹{data.originalprice-data.price}!</p>
            <div id={style.quan}>
              <button disabled={quan==1?true:false} onClick={()=>{
                setQuan(quan=>quan-1)
              total(-data.originalprice)
              sub(-data.price)}}>-</button>{quan}<button onClick={()=>{
                setQuan(quan=>quan+1)
              total(data.originalprice)
              sub(data.price)}}>+</button>
            </div>
        </div>

        <div id={style.imgDiv}>
            <img src={data.image[0]} width="150px" alt="jacket" />
        </div>

      </div>

      <div id={style.action}>
        <button>remove</button>
        <button>move to wishllist</button>
      </div>
    </div>
  )
}
