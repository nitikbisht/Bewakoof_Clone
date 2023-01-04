import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MenClothing from "./Components/MenClothing"
import Productdescription from './Components/Productdescription';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/men-clothing' element={<MenClothing/>}/>
        <Route path='/men-clothing/:id' element={<Productdescription/>}/>
      </Routes>
    </div>
  );
}

export default App;
