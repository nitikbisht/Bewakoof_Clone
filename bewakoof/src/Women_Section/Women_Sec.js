import React from 'react';
import { useState,useEffect } from 'react';
import Womensec from './WomenSec';
import Carousela from './Wminicarousel';
import "../MAN_SECTION/home.css"
import "../MAN_SECTION/mini.css"
function MenSection(props) {
    const[product,setProduct]=useState([])
    //  const[products,setProducts]=useState([])
     
    useEffect(()=>{
      getData()
    },[])
    const getData=()=>{
    
    
       fetch("https://himangshumahato82.github.io/Bewaboof-data/db.json")
       .then ((res)=>res.json())
       .then((data)=>{
         console.log(data.products)
         setProduct(data.products.Women)
        //  setProducts(data.ARRIVALS)
    
       })
    
      }
    return (
        <div>
            
        <h1 style={{textAlign:"center",color:"teal"}}>Women's Section</h1>
        <div>
       <Womensec/>
       </div>
        <div style={{display:"block",margin:"auto",padding:"20px"}}>
        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-1-1668681804.gif" alt="" />
        </div>
         <div  style={{width:"74%",height:"200px",display:"flex",margin:"auto"}}>
           <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-thumbnail-Women-1672724845.gif" alt="" width={"120px"} />
             <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-8px",marginTop:"15px"}}>designs of the Week</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Bestsellers</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Customise-Women-1668491215.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Hot Deals</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Women-1668491217.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"5px",marginTop:"15px"}}>Customization</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Bestseller-Women-1668491213.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>New Arrivals</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668491212.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"0px",marginTop:"15px"}}>Last Sizes Left</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-women-plus-1668491893.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Plus Size</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-women-merch-1668491892.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Official Collaboration</p>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668491219.jpg" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"0px",marginTop:"15px"}}>Vote for Design</p>
           </div>
         
         
         </div>
            <div>
             <h4 style={{textAlign:"center",marginTop:"50px"}}> POPULAR CATEGORIES</h4>
            <div style={{width:"98%",display:"flex",margin:"auto",marginTop:"10px"}}>
                
               <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Boyfriend-Tshirt-women-1672907482.png" alt="" />
               
               </div>
               <div>
               <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-women-1672907486.png" alt="" />
               </div>
               <div>
               <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672907491.png" alt="" />
               </div>
               <div>
               <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-women-1672907495.png" alt="" />
               </div>
               <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1672907496.png" alt="" />
               </div>
               <div>
               <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1672907487.png" alt="" />
               </div>
                 
            </div>
            <div style={{width:"98%",display:"flex",margin:"auto",marginTop:"20px"}}>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-women-1672907492.png" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Pyjamas-women-1672907492.png" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-women-1672907489.png" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-fashion-tops-1668773242.jpg" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-women-1672907488.png" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Co-ords-1672907485.png" alt="" />
             </div>
             </div>
             <h4 style={{textAlign:"center",marginTop:"10px"}}>NEW ARRIVALS</h4>
             <div style={{ marginBottom:"-80px",marginTop:"-70px"}}>
             <Carousela
             show={5}
               >
             
             { 
               product.map((elem)=>{
                 return(
                  
                 <div className='mapA'>
                
                   {console.log(elem.img)}
                 <img src={elem.img} alt=""  width={"95%"} height={"350px"}/>
                  <h5 style={{textAlign:"center"}}>{elem.brand}</h5>
                  <p style={{textAlign:"center",marginTop:"-10px"}}>{elem.title}</p>
                  <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"-15px"}}>
                  <p>₹{elem.price}</p>
                  <p style={{textDecoration:"line-through",marginTop:"0px"}}>{elem.strike}</p>
                  <p style={{color:"#1ab64f"}}> {elem.off} OFF</p>
                  </div>
                 </div>
                 )
               })
             }
           
             </Carousela>
             </div>
             
           
            <h4 style={{textAlign:"center",marginTop:"0px"}}>DISCOUNT PE DISCOUNT</h4>
             <div  style={{width:"98%",display:"flex",margin:"auto",marginTop:"20px"}}>
              <div>
              <img src="https://images.bewakoof.com/uploads/grid/app/mid-banner-solid-hoodies-w-1669895289.jpg" alt="" width={"99%"}/>
              </div>
              <div>
              <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-softcottomPJ-Common-1672319772.jpg" alt="" width={"99%"} />
              </div>
             
             </div>
             <div  style={{width:"98%",display:"flex",margin:"auto",marginTop:"20px"}}>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-women-pants-1668491468.jpg" alt="" width={"99%"}/>
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-women-pants-1668491468.jpg" alt="" width={"99%"} />
             </div>
              
            </div>
              
  
            </div>
            <h4 style={{textAlign:"center",marginTop:"30px"}}>BESTSELLERS</h4>
            <div style={{ marginBottom:"10px",marginTop:"-70px"}}>
              
              <Carousela
              show={5}
                >
              
              { 
                product.map((elem)=>{
                  return(
                   
                  <div className='mapA'>
                 
                    {console.log(elem.img)}
                  <img src={elem.img} alt=""  width={"95%"} height={"350px"}/>
                   <h5 style={{textAlign:"center"}}>{elem.brand}</h5>
                   <p style={{textAlign:"center",marginTop:"-10px"}}>{elem.title}</p>
                   <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"-15px"}}>
                   <p>₹{elem.price}</p>
                   <p style={{textDecoration:"line-through",marginTop:"0px"}}>{elem.strike}</p>
                   <p style={{color:"#1ab64f"}}> {elem.off} OFF</p>
                   </div>
                  </div>
                  )
                })
              }
            
              </Carousela>
              </div>
             <div style={{marginBottom:"30px",marginTop:"-90px",marginLeft:"15px"}}>
             <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-1-1672040128.jpg" alt="" />
             
             </div>


        </div>
    );
}

export default MenSection;