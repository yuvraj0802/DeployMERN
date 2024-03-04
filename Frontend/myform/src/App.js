import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import AllPost from './AllPost'
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreatePost/>} />
            <Route path="/AllPost" element={<AllPost/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
