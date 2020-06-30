import React from 'react';
import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <div>
         <Main/>
       </div>
    </BrowserRouter>
  );
}

export default App;
