import React, { useEffect, useState } from 'react'
import dat from "../db.json"
// import ProductFilter from './ProductFilter'
import style from "./MenClothing.module.css"
import Display from './Display'
// import Footer from '../landing/Footer'
import Navabar from '../landing/Component/Home/Navabar'
import Footer from '../landing/Component/Home/Footer'

function MenClothing() {
    const[data,setData]=useState(dat.men)
    const[sort,setSort]=useState(1)
    const[filter,setFilter]=useState(false)
    const[price,setPrice]=useState("")
    const[rating,setRating]=useState("")
    const[discount,setDiscount]=useState("")
    // console.log(data)
  return (<>
        <Navabar/>
    <div className={style.container}>
          <div className={style.top}>
              <h1>MEN CLOTHING </h1>

              <span>({data.length})</span>
          </div>
          <div className={style.product}>
              <div className={style.filter}>
                  {/* <ProductFilter/> */}
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                      <h3 style={{color:"rgba(45,45,45,.5)"}}>Filter</h3>
                      {filter?<h5 onClick={()=>{setFilter(false)
                    setPrice("")
                    setDiscount("")
                    setRating("")}}  style={{color:"green",cursor:"pointer"}}>Clear All</h5>:""}
                      
                  </div>
                  <div>
                    <h4>PRICE</h4>
                  <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p onClick={()=>{setFilter(true)
                        setPrice("Below 300")}}>Below 300</p>
                        <p onClick={()=>{setFilter(true)
                        setPrice("300 to 500")}}>300 to 500</p>
                        <p onClick={()=>{setFilter(true)
                        setPrice("501 to 700")}}>501 to 700</p>
                        <p onClick={()=>{setFilter(true)
                        setPrice("701 to 900")}}>701 to 900</p>
                        <p onClick={()=>{setFilter(true)
                        setPrice("Above 900")}}>Above 900</p>
                    </div>
                  </div>
                  <div>
                    <h4>DISCOUNT</h4>
                    <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("10+")}}>10% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("20+")}}>20% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("30+")}}>30% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("40+")}}>40% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("50+")}}>50% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("60+")}}>60% or More</p>
                        <p onClick={()=>{setFilter(true)
                        setDiscount("70+")}}>70% or More</p>
                    </div>
                  </div>
                  <div > 
                    <h4>RATING</h4>
                    <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p onClick={()=>{setFilter(true)
                        setRating("1+")}}>1 and above</p>
                        <p onClick={()=>{setFilter(true)
                        setRating("2+")}}>2 and above</p>
                        <p onClick={()=>{setFilter(true)
                        setRating("3+")}}>3 and above</p>
                        <p onClick={()=>{setFilter(true)
                        setRating("4+")}}>4 and above</p>
                    </div>
                  </div>
              </div>
              <div className={style.main}>
                  <div >
                      <h3 style={{color:"rgba(45,45,45,.5)"}}>SORT BY</h3>
                      <select onChange={(e) => {
                          let nameorder=e.target.value;
                          let arr=dat.men
                          if(nameorder==="low"){
                            console.log("low")
                            arr.sort(function(a,b){
                                if (a.price > b.price) {
                                    return 1
                                }
                                if (a.price < b.price) {
                                    return -1
                                }
                                return 0
                            })
                            setData(arr)
                            setSort(4)
                          }
                          else if(nameorder==="high"){
                            console.log("high")
                            arr.sort(function(a,b){
                                if (a.price > b.price) {
                                    return -1
                                }
                                if (a.price < b.price) {
                                    return 1
                                }
                                return 0
                            })
                            setData(arr)
                            setSort(3)
                        }
                        else if(nameorder==="rating"){
                            console.log("rating")
                            arr.sort(function(a,b){
                                if (a.rating > b.rating) {
                                    return -1
                                }
                                if (a.rating < b.rating) {
                                    return 1
                                }
                                return 0
                            })
                            setData(arr)
                            setSort(2)
                        }
                        else if(nameorder==="all"){
                            console.log("all")
                            arr.sort(function(a,b){
                                if (a.id > b.id) {
                                    return 1
                                }
                                if (a.id < b.id) {
                                    return -1
                                }
                                return 0
                            })
                            setData(arr)
                            setSort(1)
                        }
                        // console.log(data)
                        
                      }}>
                          <option value={"all"}>New Arrival</option>
                          <option value={"rating"}>Popular</option>
                          <option value={"high"}>High To Low</option>
                          <option value={"low"}>Low To High</option>
                      </select>
                  </div>
                  {/* {console.log(sort)} */}
                  <div className={style.display}>
                    {/* {console.log(data)} */}
                      {data
                            .filter((el)=>{
                                if(price==="Below 300"){
                                    return el.price<300
                                }
                                else if(price==="300 to 500"){
                                    return el.price>=300 && el.price<=500
                                }
                                else if(price==="501 to 700"){
                                    return el.price>=501 && el.price<=700
                                }
                                else if(price==="701 to 900"){
                                    return el.price>=701 && el.price<=900
                                }
                                else if(price==="Above 900"){
                                    return el.price>900
                                }
                                else if(price===""){
                                    return 1
                                }
                            })
                            .filter((el)=>{
                                let off=((el.originalprice-el.price)/el.originalprice)*100
                                    off=Math.round(off)
                                if(discount===""){
                                    return 1
                                }
                                else if(discount==="10+"){
                                    return off>=10
                                }
                                else if(discount==="20+"){
                                    return off>=20
                                }
                                else if(discount==="30+"){
                                    return off>=30
                                }
                                else if(discount==="40+"){
                                    return off>=40
                                }
                                else if(discount==="50+"){
                                    return off>=50
                                }
                                else if(discount==="60+"){
                                    return off>=60
                                }
                                else if(discount==="70+"){
                                    return off>=70
                                }
                            })
                            .filter((el)=>{
                                if(rating==="1+"){
                                    return el.rating>1
                                }
                                else if(rating==="2+"){
                                    return el.rating>2
                                }
                                else if(rating==="3+"){
                                    return el.rating>3
                                }
                                else if(rating==="4+"){
                                    return el.rating>4
                                }
                                else if(rating===""){
                                    return 1
                                }
                            })
                            .map((el, ind) => {
                          // console.log(el)
                          return <Display key={ind + 1} data={el} />
                        })}
                  </div>
              </div>
          </div>

    </div>
    <Footer/>
                        </>
  )
}

export default MenClothing