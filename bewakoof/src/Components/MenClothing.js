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
                      <h5>Filter</h5>
                  </div>
                  
              </div>
              <div className={style.main}>
                  <div >
                      <h5>SORT BY</h5>
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