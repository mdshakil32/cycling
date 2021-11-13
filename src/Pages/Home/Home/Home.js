import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../../Shared/Product/Product';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BigCycle from '../BigCycle/BigCycle';
import HomeReview from '../HomeReview/HomeReview';
import OurService from '../OurService/OurService';
import './Home.css';

const ourServices = [
    
    {
        image:'https://i.ibb.co/16WZcVr/fast-delivery.png',
        title:'Fast Delivery',
        detail:'Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh.'
    },
    {
        image:'https://i.ibb.co/qMv071v/genuine.png',
        title:'Genuine Product',
        detail:'Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh.'
    },
    {
        image:'https://i.ibb.co/yydBp6y/customer-service.png',
        title:'24X7 Support',
        detail:'Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh.'
    },
    {
        image:'https://i.ibb.co/8gDk6m4/return.png',
        title:'7 Days Return',
        detail:'Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh.'
    },
]
const Home = () => {
    const [products,setProducts] = useState([]);
    const [reviews,setReviews] = useState([]);

    // get products 
    useEffect(()=>{
        fetch('https://calm-badlands-73470.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[]);

    // get reviews
    useEffect(()=>{
        fetch('https://calm-badlands-73470.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[]);

    return (
        <div>
            {/* navbar   */}
            <Navigation></Navigation>

            {/* banner  */}
            <Banner></Banner>

            {/* our services  */}
            <div className="ourServices py-5">
                <div className="container">
                    <div className="row">
                    {
                        ourServices.map((service,index) => <OurService key={index} service={service}>
                        </OurService>)
                    }
                        
                    </div>
                </div>
            </div>

            
            {/* products  */}
            <div className="products">
                <div className="container">
                    <div className="row">
                        <h1 className="fs-1 text-center mt-5">Featured Products</h1>
                        <p className="text-center mb-5">Our Bikes are best in the world. We ensure high quality materials and best service</p>
                        
                        {
                            products.slice(0,6).map(product => <Product key={product._id} product={product} ></Product>)
                        }
                    </div>
                </div>
            </div>

            <AboutUs></AboutUs>
            <BigCycle></BigCycle>

            <HomeReview></HomeReview>
            <Footer></Footer>

            

        </div>
    );
};

export default Home;