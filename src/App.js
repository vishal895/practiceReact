import logo from "./logo.svg";
import "./App.css";


import React from 'react'
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Login2 from "./pages/login2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login2" element={<Login2/>}/>
      </Routes>
    </div>
  )
}

export default App