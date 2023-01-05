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
  return (
    <div className={style.container}>
    <div  className={style.smallimg}>
      {arr[0].image.map((el)=>{
        return <img src={el} width={"55px"} onClick={()=>{setState(el)}}/>
      })}
    </div>
      <div>
        <img src={state} width={"100%"} height={"500px"}/>
      </div>
    </div>
  )
}

export default Productdescription