import logo from "./logo.svg";
import "./App.css";


import React from 'react'
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Login2 from "./pages/login2";
import Product from "./pages/Product";
import Showhide from "./pages/showhide";
import Logic from "./pages/logic";
import Table2 from "./pages/table2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login2" element={<Login2/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/show" element={<Showhide/>}/>
        <Route path="/logic" element={<Logic/>}/>
        <Route path="/table" element={<Table2/>}/>

      </Routes>
    </div>
  )
}

export default App