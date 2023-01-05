
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MenClothing from "./Components/MenClothing"
import Productdescription from './Components/Productdescription';
import React from 'react';
import MenSection from './MAN_SECTION/MenSection';


function App() {
 
  return (

    <div className="App">
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/men-clothing' element={<MenClothing/>}/>
        <Route path='/men-clothing/:id' element={<Productdescription/>}/>
        <Route path='/men-section' element={<MenSection/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
