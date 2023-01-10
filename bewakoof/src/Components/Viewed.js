import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from "./Viewed.module.css"

function Display({data}) {
  // console.log(data)
  const dispatch=useDispatch()
  return (<>
  <Link to={`/men-clothing/${data.id}` }>
    <div className={style.display} >
      <img src={data.image[0]} className='image' width={"100%"}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h5>Bewakoof</h5>
        <img src="https://cdn0.iconfinder.com/data/icons/gender-thinline-set/144/Love-512.png" width={"30px"} height={"30px"}/>
      </div>
      <p>{data.name}</p>
      <div className={style.price}>
        <h4>₹{data.price}</h4>
        <h5>₹{data.originalprice}</h5>
      </div>
    </div>
  </Link>
  </>
  )
}

export default Display