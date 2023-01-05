
import React from 'react';
import { useState } from 'react';
import Mansec from './MAN_SECTION/Mansec';
import Carousela from './MAN_SECTION/Minicarousel';
 import "./MAN_SECTION/mini.css"
 import "./MAN_SECTION/home.css"
function App() {
 const[product,setProduct]=useState([])  

   fetch("https://himangshumahato82.github.io/Bewakoof/db.json")
   .then ((res)=>res.json())
   .then((data)=>{
     console.log(data.ARRIVALS)
     setProduct(data.ARRIVALS)
   })


  return (
    <div className="App" >
     <h1>Himangshu</h1>
      <div>
     <Mansec/>
     </div>
      <div style={{display:"block",margin:"auto",padding:"20px"}}>
      <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-1-1668681804.gif" alt="" />
      </div>
       <div  style={{width:"74%",height:"200px",display:"flex",margin:"auto"}}>
         <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-thumbnail-men-1672724845.gif" alt="" width={"120px"} />
           <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-8px",marginTop:"15px"}}>designs of the Week</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Bestseller-Men-1668491213.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Bestsellers</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Hot Deals</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Customise-Men-1668491215.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"5px",marginTop:"15px"}}>Customization</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Men-1668491217.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>New Arrivals</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668491212.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"0px",marginTop:"15px"}}>Last Sizes Left</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-PlusSize-Men-1668491218.jpg" alt="" width={"120px"} />
         <p style={{textAlign:'center',height:"5px",marginRight:"9px",marginLeft:"-10px",marginTop:"15px"}}>Plus Size</p>
         </div>
         <div>
         <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Men-1668491214.jpg" alt="" width={"120px"} />
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
              <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668772678.jpg" alt="" />
             
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670503952.jpg" alt="" />
             </div>
             <div>
              <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg" alt="" />
             </div>
             <div>
             <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670503953.jpg" alt="" />
             </div>
               
          </div>
          <div style={{width:"98%",display:"flex",margin:"auto",marginTop:"20px"}}>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" alt="" />
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg" alt="" />
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-shirts-1668772679.jpg" alt="" />
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-boxers-1668772675.jpg" alt="" />
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-jeans-1668772677.jpg" alt="" />
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Shoes-1668754848.jpg" alt="" />
           </div>
              
           
          </div>
          <h4 style={{textAlign:"center",marginTop:"30px"}}>DISCOUNT PE DISCOUNT</h4>
           <div  style={{width:"98%",display:"flex",margin:"auto",marginTop:"10px"}}>
            <div>
            <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-softcottomPJ-Common-1672319772.jpg" alt="" width={"99%"}/>
            </div>
            <div>
            <img src="https://images.bewakoof.com/uploads/grid/app/full-sleeve-mid-1672235827.jpg" alt="" width={"99%"} />
            </div>
           
           </div>
           <div  style={{width:"98%",display:"flex",margin:"auto",marginTop:"20px"}}>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/midsize-banner--windcheater-1671719823.jpg" alt="" width={"99%"}/>
           </div>
           <div>
           <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-buy3at899-1672668872.jpg" alt="" width={"99%"} />
           </div>
            
          </div>
            

          </div>
          <div style={{ marginBottom:"80px"}}>
            
            <Carousela
            show={4}
              >
            
            { 
              product.map((elem)=>{
                return(
                 
                <div className='mapA'>
               
                  {console.log(elem.img)}
                <img src={elem.img} alt="" />
               
                
                
                </div>
                )
              })
            }
          
            </Carousela>
            </div>

    </div>
   
  );
}

export default App;
