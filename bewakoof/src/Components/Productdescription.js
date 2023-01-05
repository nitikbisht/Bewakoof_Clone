import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../db.json"
import style from "./description.module.css"


function Productdescription() {
    const {id}=useParams()
    // console.log(id)
    const arr=data.men.filter((el)=>{
      return el.id==id
    })
    const[state,setState]=useState(arr[0].image[0])
    console.log(arr)
    let off=((arr[0].originalprice-arr[0].price)/arr[0].originalprice)*100
    off=Math.round(off)
  return (
    <div className={style.container}>
      <div  className={style.smallimg}>
        {arr[0].image.map((el,ind)=>{
          return <img key={ind+1} src={el} width={"55px"} onClick={()=>{setState(el)}}/>
        })}
      </div>
      <div className={style.bigimg}>
        <img src={state} width={"100%"} height={"500px"}/>
      </div>
      <div className={style.content}>
        <div>
          <h3>BEWAKOOF</h3>
          <h3>{arr[0].name}</h3>
        </div>
        <div className={style.rating}>RATING</div>
        <div>
          <div className={style.price}>
            <h3>₹{arr[0].price}</h3>
            <h4 style={{textDecoration:"line-through",color:"#949494"}}>₹{arr[0].originalprice}</h4>
            <h3 style={{color:"green"}}>{off}% OFF</h3>
          </div>
          <div>Inclusive of all Taxes</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Productdescription