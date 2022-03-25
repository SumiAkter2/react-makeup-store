import React from 'react';
import './Product.css';
const Product = (props) => {
    const {image_link,brand, name,price}=props.product;
   
    // const {orderCart,product}=props;
    
    
    return (
        <div >
         <div  className='product'>
        
          <img src={image_link} alt="" />
            
            <div className='text'>
            <h2> {name.slice(0,30)}</h2>
            <h1>Brand: {brand}</h1>
            <h3>Price: $ {price}</h3>
            </div>
           
            
           
            <button onClick={()=>props.orderCart(props.product)} className='btn'>Buy Now</button>
         </div>
            
           
        </div>
    );
};

export default Product;