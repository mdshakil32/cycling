import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    const history = useHistory();
    const handleExplore =(e)=>{
        history.push('/store');
        e.preventDefault();
    }
    return (
        <div className="banner">
            <div className="bg-overlay">
            
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 text-dark banner-left">
                        <h3 className=" text-white">For A Better Ride</h3>
                        <h1 className="fw-bold banner-big-text">Find Your <br /> <span className="text-danger">Mountain</span> <br /> Bike</h1>
                        <button onClick={handleExplore} className="btn btn-danger banner-btn fw-bold">Explore Shop</button>
                    </div>
                    <div className="banner-img col-md-7">
                        <img className="w-100" src="https://i.ibb.co/Hg7Xv5b/banner-bicycle.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;