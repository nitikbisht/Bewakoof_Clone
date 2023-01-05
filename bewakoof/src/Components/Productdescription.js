import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../db.json"
import style from "./description.module.css"


function Productdescription() {
    const {id}=useParams()
    // console.log(id)
    const arr=data.men.filter((el)=>{
      return el.id==id
    })
    const[state,setState]=useState(arr[0].image[0])
    const[bag,setBag]=useState(true)
    console.log(arr)
    let off=((arr[0].originalprice-arr[0].price)/arr[0].originalprice)*100
    off=Math.round(off)
    const handeladd=()=>{
      setBag(false)
    }
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
        <div className={style.rating}>
          RATING
        </div>
        <div style={{marginTop:"10px",paddingBottom:"10px",borderBottom:"2px solid grey"}}>
          <div className={style.price}>
            <h3>₹{arr[0].price}</h3>
            <h4 style={{textDecoration:"line-through",color:"#949494"}}>₹{arr[0].originalprice}</h4>
            <h3 style={{color:"green"}}>{off}% OFF</h3>
          </div>
          <div>Inclusive of all Taxes</div>
        </div>
        <div style={{marginTop:"20px",paddingBottom:"10px",borderBottom:"2px solid grey"}}>
          TriBe members get an extra discount of ₹60 and FREE shipping.<Link to={"*"}>Learn more</Link>
        </div>
        <div className={style.buttons}>
          {bag?<button style={{height:"40px", backgroundColor:"#ffd84d",border:"1px solid #d6d6d6"}} onClick={handeladd}>ADD TO BAG</button>:<button style={{height:"40px", backgroundColor:"#ffd84d",border:"1px solid #d6d6d6"}}>GO TO CART</button>}
          <button style={{height:"40px", backgroundColor:"white",border:"1px solid #d6d6d6"}}>
          
          WISHLIST</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Productdescription