import React from 'react';
import "./App.css"
import Home from "./components/Home"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Output from './components/Output';



function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home}/> 
        <Route path="/:id" component={Output} />
      </div>
    </Router>
  );
}

export default App;
