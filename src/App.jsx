import React from 'react';
import Home from './component/Home';
import MovieRoute from './component/MovieRoute';
import {Routes, Route , Link ,BrowserRouter } from 'react-router-dom';

export default function App() {
  
return(

  <BrowserRouter>
  <Link to='/'> Home</Link>
  <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<MovieRoute/>} />

      </Routes>
  </BrowserRouter>
)

;
}