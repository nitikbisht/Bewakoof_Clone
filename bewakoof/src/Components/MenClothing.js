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
        
        <span>({data.men.length})</span>
        </div>
        <div className={style.product}>
          <div className={style.filter}>
            {/* <ProductFilter/> */}
            <div>
              <h5>Filter</h5>
            </div>
            <div id="filter">
              {/* ///////////   Price     ///////////// */}
            <div id="price" class="filter-child"> 
                <span>PRICE</span>
                <div>
                    <input class="price-input" type="checkbox" name="200" value="300"/>
                    <label for="">Rs. 200 to Rs. 300 </label>
                </div>
                <div>
                    <input class="price-input" type="checkbox" name="301" value="400"/>
                    <label for="">Rs. 301 to Rs. 400 </label>
                </div>
                <div>
                    <input class="price-input" type="checkbox" name="401" value="500"/>
                    <label for="">Rs. 401 to Rs. 500 </label>
                </div>
            </div>
            {/* ///////////   Discount     ///////////// */}
            <div class="filter-child">
                <span>DISCOUNT RANGE</span>
                <div>
                    <input class="discount-input" type="checkbox" value="10"/>
                    <label for="">10% and above</label>
                </div>
                <div>
                    <input class="discount-input" type="checkbox" value="20"/>
                    <label for="">20% and above</label>
                </div>
                <div>
                    <input class="discount-input" type="checkbox" value="30"/>
                    <label for="">30% and above</label>
                </div>
                <div>
                    <input class="discount-input" type="checkbox" value="40"/>
                    <label for="">40% and above</label>
                </div>
                <div>
                    <input class="discount-input" type="checkbox" value="50"/>
                    <label for="">50% and above</label>
                </div>
                <div>
                    <input class="discount-input" type="checkbox" value="60"/>
                    <label for="">60% and above</label>
                </div>
            </div>
            {/* <div class="filter-child">
                <span>CATEGORIES</span>
                <div>
                    <input class="cat-input" type="checkbox" value="T-shirt"/>
                    <label for="">T-shirts </label>
                </div>
                <div>
                    <input class="cat-input" type="checkbox" value="Hooded"/>
                    <label for="">Hooded T-shirts </label>
                </div>
            </div> */}
            {/* <div class="filter-child">
                <span>BRAND</span>
                <div>
                    <input class="brand-input" type="checkbox" id="leotude" name="checkbox" value="LEOTUDE"/>
                    <label for="">LEOTUDE </label>
                </div>
                <div>
                    <input class="brand-input" type="checkbox" value="GRITSTONES"/>
                    <label for="">GRITSTONES </label>
                </div>
                <div>
                    <input class="brand-input" type="checkbox" value=""/>
                    <label for="">Amazon Brand </label>
                </div>
                <div>
                    <input class="brand-input" type="checkbox" value="ADIDAS"/>
                    <label for="">ADIDAS </label>
                </div>
                <div>
                    <input class="brand-input" type="checkbox" value="Nike"/>
                    <label for="">Nike </label>
                </div>
            </div> */}
            
            {/* <div class="filter-child">
                <span>COLOR</span>
                <div>
                    <input class="color-input" type="checkbox" value="Black"/>
                    <label for=""><span id="product-black"></span>Black  </label>
                </div>
                <div>
                    <input class="color-input" type="checkbox" value="grey"/>
                    <label for=""><span id="product-grey"></span>Grey  </label>
                </div>
                <div>
                    <input class="color-input" type="checkbox" value="Blue"/>
                    <label for=""><span id="product-blue"></span>Blue </label>
                </div>
                <div>
                    <input class="color-input" type="checkbox" value="maroon"/>
                    <label for=""><span id="product-maroon"></span>Maroon </label>
                </div>
                
            </div> */}
            
          </div>
            </div>
          <div className={style.main}>
            <div >
            <h5>SORT BY</h5>
            <select>
              <option>Popular</option>
              <option>New Arrival</option>
              <option>High To Low</option>
              <option>Low To High</option>
            </select>
            </div>
            <div className={style.display}>
            {data.men.map((el,ind)=>{
              return <Display key={ind+1} data={el}/>
            })}
            </div>
          </div>
        </div>

    </div>
  )
}

export default MenClothing