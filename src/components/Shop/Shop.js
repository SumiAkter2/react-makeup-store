import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
        
    },[])
    const [order, setOrder]=useState([]);
    const orderCart=(product)=>{
        
     const   newCart=[...order,product];
        setOrder(newCart);
    }
    return (
        <div className='shop' >
          <div className='order'>
              <h1>Order</h1>
            <p>Total:{order.length}</p>
              </div>
        <div className='container'>
        {
              products.map(product=><Product
              orderCart={orderCart}
                key={product.id}
                product={product}></Product>)
          }
        </div>
       
             
           
        </div>
    );
};

export default Shop;