import React from 'react'
import Product from "./Product";

export const Products = () => {
    const products = [
  /*{
    id: 1,
    name: "Nike Air Max",
    price: "$120"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$140"
  },
  {
    id: 3,
    name: "Puma Runner",
    price: "$95"
  }*/
];
 
  return (
    <div>
      {products.length===0?<p>📦 No Products Available</p>:products.map((product)=>{
      return (
        < Product
        key={product.id}
        name={product.name}
        price={product.price}
        />
      )       

        })}
      
        
    </div>
  )
}
export default Products;