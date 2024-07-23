import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home';

import Room from './Components/Room';
const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/room/:roomId" element={<Room/>} />
            </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}

export default App
