import React from 'react'
import data from "../db.json"
import ProductFilter from './ProductFilter'
import style from "./MenClothing.module.css"
import Display from './Display'


function MenClothing() {
    console.log(data.men)
  return (
    <div className={style.container}>
        <div className={style.top}>
        <h1>MEN CLOTHING </h1>
        <h2></h2>
        <span>({data.men.length})</span>
        </div>
        <div className={style.product}>
            <ProductFilter/>
            <Display/>
        </div>

    </div>
  )
}

export default MenClothing