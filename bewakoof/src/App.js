import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MenClothing from "./Components/MenClothing"



function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/men-clothing' element={<MenClothing/>}/>
      </Routes>
    </div>
  );
}

export default App;
