import React from 'react';
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
