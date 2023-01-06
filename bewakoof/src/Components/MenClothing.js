import React, { useEffect, useState } from 'react'
import dat from "../db.json"
import ProductFilter from './ProductFilter'
import style from "./MenClothing.module.css"
import Display from './Display'


function MenClothing() {
    const[data,setData]=useState(dat.men)
    const[sort,setSort]=useState(1)
    const[filter,setFilter]=useState("")
    // console.log(data)
  return (
    <div className={style.container}>
          <div className={style.top}>
              <h1>MEN CLOTHING </h1>

              <span>({data.length})</span>
          </div>
          <div className={style.product}>
              <div className={style.filter}>
                  {/* <ProductFilter/> */}
                  <div>
                      <h3 style={{color:"rgba(45,45,45,.5)",marginBottom:"30px"}}>Filter</h3>
                  </div>
                  <div>
                    <h4>PRICE</h4>
                    <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p >Below 300</p>
                        <p>300 to 500</p>
                        <p>501 to 700</p>
                        <p>701 to 900</p>
                        <p>Above 900</p>
                    </div>
                  </div>
                  <div>
                    <h4>DISCOUNT</h4>
                    <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p>10% or More</p>
                        <p>20% or More</p>
                        <p>30% or More</p>
                        <p>40% or More</p>
                        <p>50% or More</p>
                        <p>60% or More</p>
                        <p>70% or More</p>
                    </div>
                  </div>
                  <div > 
                    <h4>RATING</h4>
                    <div style={{color:"rgba(45,45,45,.7)",cursor:"pointer",padding:"10px",lineHeight:"25px",borderBottom:"2px solid lightgrey"}}>
                        <p>1 and above</p>
                        <p>2 and above</p>
                        <p>3 and above</p>
                        <p>4 and above</p>
                    </div>
                  </div>
              </div>
              <div className={style.main}>
                  <div >
                      <h5 style={{color:"rgba(45,45,45,.5)"}}>SORT BY</h5>
                      <select style={{border:"none",width:"100px"}} onChange={(e) => {
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
                      {data.map((el, ind) => {
                        // console.log(el)
                          return <Display key={ind + 1} data={el} />
                      })}
                  </div>
              </div>
          </div>

    </div>
  )
}

export default MenClothing