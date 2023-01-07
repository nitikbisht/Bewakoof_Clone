
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Cart from './Component/Cart/Cart';
import MenClothing from "./Components/MenClothing"
import Productdescription from './Components/Productdescription';
import React from 'react';
import MenSection from './MAN_SECTION/MenSection';

import WomenSection from "./Women_Section/Women_Sec";




function App() {
 
  return (

    <div className="App">
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/men-clothing' element={<MenClothing/>}/>
        <Route path='/men-clothing/:id' element={<Productdescription/>}/>
        <Route path='/men-section' element={<MenSection/>}/>
        <Route path='/women-section' element={<WomenSection/>}/>
        <Route path='/bag' element={<Cart />}/>
        
      </Routes>
      

    </div>
   
  );
}

export default App;
