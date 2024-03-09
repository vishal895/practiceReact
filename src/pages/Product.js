import React, { useState } from "react";
import "../component/Product.css";
import ProductCard from "../component/ProductCard";

const Product = () => {
    
  return (
    <>
      <div className="heading">HERE IS PRODUCT</div>
      

      <div className="grid">
        

        <ProductCard/>
      </div>

      
    
    </>
  );
};

export default Product;
