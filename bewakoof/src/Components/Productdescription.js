import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import data from "../db.json"
import style from "./description.module.css"
import Navabar from '../landing/Component/Home/Navabar'
import Footer from '../landing/Component/Home/Footer'
import { useSelector } from 'react-redux'
function Productdescription() {
  const navigate = useNavigate();
    const {id}=useParams()
    // console.log(id)
    const arr=data.men.filter((el)=>{
      return el.id==id
    })
    const { isAuthenticated } = useSelector((state) => state.auth.data);
    const[state,setState]=useState(arr[0].image[0])
    const[bag,setBag]=useState(true)
    console.log(arr)
    let off=((arr[0].originalprice-arr[0].price)/arr[0].originalprice)*100
    off=Math.round(off)
    const handeladd=()=>{
      if(isAuthenticated){
        setBag(false)
      }
      else{
navigate("/login")
      }
      
    }
  return (<>
      <Navabar/>
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
          <div>
          {arr[0].rating}
          </div>
          <img src="https://th.bing.com/th/id/R.0bda9208f015ef972b13e75bcd777451?rik=4C7auJOfe9AgVg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fstar%2fstar_PNG1592.png&ehk=CAYzonPiFDXphouQjxgJYfiEs6uRh1%2fJxdBPQvDVxtc%3d&risl=&pid=ImgRaw&r=0" width={"15px"}/>
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
          TriBe members get an extra discount of ₹60 and FREE shipping. <Link to={"*"}>Learn more</Link>
        </div>
        <div className={style.buttons}>
          {bag?<button style={{height:"40px", backgroundColor:"#ffd84d",border:"1px solid #d6d6d6",alignItems:"center",justifyContent:"center",display:"flex",gap:"8px"}} onClick={handeladd}>
            <img src="https://th.bing.com/th/id/R.435444c86682cce8bd873882488ba5fa?rik=xi14PvSJneLJBg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_311148.png&ehk=gvhIQhsORaOoAL3C1nRE8m18kbmW6H5vaVjA0IRFKXM%3d&risl=&pid=ImgRaw&r=0" width={"15px"}/>
            <div>ADD TO BAG</div>
            </button>:
            <Link to={"/bag"}>
            <button style={{height:"40px", backgroundColor:"#ffd84d",textDecoration:"underline #ffd84d ",border:"1px solid #d6d6d6",alignItems:"center",justifyContent:"center",display:"flex",gap:"8px",width:"100%"}}>
              <img src="https://th.bing.com/th/id/R.31822d029a7c7ab165498083fb555f81?rik=aytzJVKxZGWFRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_98582.png&ehk=ZdzrfZIZtoxw2d6FbFfImZuDSeSblb1p1XfHxj0vdm8%3d&risl=&pid=ImgRaw&r=0" width={"15px"}/>
              <div>GO TO CART</div>
              </button>
              </Link>
              }
            
          <button style={{height:"40px", backgroundColor:"white",border:"1px solid #d6d6d6",alignItems:"center",justifyContent:"center",display:"flex" }}>
          <img src="https://cdn0.iconfinder.com/data/icons/gender-thinline-set/144/Love-512.png" width={"35px"}/>
           <div>WISHLIST</div></button>
        </div>
        <div>
          <h3>Product Description</h3>
          <p>If you're in awe of the iconic nine-tailed fox,
             then this Kyuubi Mode Men's Oversized Full Sleeve T-Shirt is for you.
              Match this black t-shirt with boots, a jacket & cropped trousers for a rugged look.
              <br/>
                <br/>
                Country of Origin - India
                </p>
        </div>
      </div>
    </div>
    <Footer/>
              </>
  )
}

export default Productdescription