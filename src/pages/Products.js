import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

function Products() {
  const [products,setProducts]= useState([]);
  useEffect(() => {
   fetch('https://fakestoreapi.com/products')
   .then((res) => res.json())
   .then ((data) => {
      console.log(data);
      setProducts(data);
   });
},[]);

  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/Products/AddProduct"} className="btn btn-success btn-sm mt-3 ">Add New</Link>

      <table className="table table-stripped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
            { products.map((product)=>{
                return(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">Delete</button>
                      <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                      <button className="btn btn-primary btn-sm">Edit</button>
                    </td>
                  </tr>        
                );
            })}
        </tbody>
      </table>
    </>
        );
}


export default Products;