import React from 'react';
import './App.css';
import Landing from './views/Landing'
import Message from './views/Message'
import { Route } from "react-router-dom";

export default function App() {
  document.getElementById("root").style.height = "100%";
  let vh = Math.max(window.innerHeight, 200);
  return (
    <div className='app' style={{height: `${vh}px`}}>
      <Route exact path='/' component={Landing} />
      <Route path='/message' component={Message} />
    </div>
  );
}
