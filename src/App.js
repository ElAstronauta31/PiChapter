import React from 'react';
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import About from './Components/About/about';
import Join from './Components/Join/join';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div >
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/join" element={<Join/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
