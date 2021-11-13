import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Shared/Product/Product';

const Store = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://calm-badlands-73470.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div className="products">
                <div className="container">
                    <div className="row">
                        <h1 className="fs-1 text-center mt-5">All Products </h1>
                        <p className="text-center mb-5">Our Bikes are best in the world. We ensure high quality materials and best service</p>

                        
                        {
                            products.map(product => <Product key={product._id} product={product} ></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;