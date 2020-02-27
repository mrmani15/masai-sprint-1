import React from 'react';
import "./App.css"
import Title from './components/Title';
import Search from './components/Search';
import Result from './components/Result';


function App() {
  return (
    <div>
      <Title />
      <Search />
      <Result />
    </div>
  );
}

export default App;
