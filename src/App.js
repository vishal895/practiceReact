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
import Task from "./pages/task";
import Task2 from "./pages/Task2";
import FilterApi from "./pages/filterApi";
import Productfilter from "./pages/productfilter";
import Snapshot from "./pages/snapshot";
import ThreeApi from "./pages/threeApi";
import Yourmaster from "./pages/yourmaster";

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
        <Route path="/task" element={<Task/>}/>
        <Route path="/task2" element={<Task2/>}/>
        <Route path="/filterapi" element={<FilterApi/>}/>
        <Route path="/productfilter" element={<Productfilter/>}/>
        <Route path="/snap" element={<Snapshot/>}/>
        <Route path="/threeapi" element={<ThreeApi/>}/>
        <Route path="/master" element={<Yourmaster/>}/>

      </Routes>
    </div>
  )
}

export default App