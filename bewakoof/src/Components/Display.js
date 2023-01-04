import React from 'react'
import { Link } from 'react-router-dom'
import style from "./display.module.css"
function Display({data}) {
  return (
  <Link to={`/men-clothing/${data.id}` }>
    <div className={style.display}>
      <img src={data.image[0]} width={"100%"}/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h5>Bewakoof</h5>
        <h6>icon</h6>
      </div>
      <p>{data.name}</p>
      <div className={style.price}>
        <h4>₹{data.price}</h4>
        <h5>₹{data.originalprice}</h5>
      </div>
    </div>
  </Link>
  )
}

export default Display