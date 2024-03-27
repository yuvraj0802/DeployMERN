import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import AllPost from './AllPost'
import EditPost from './EditPost'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreatePost/>} />
            <Route path="/AllPost" element={<AllPost/>} />
            <Route path="/EditPost/:id" element={<EditPost/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
