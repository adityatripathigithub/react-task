import React from 'react'
import Navbar from './components folder/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components folder/Home';

const App = () => {
  return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      );
}

export default App