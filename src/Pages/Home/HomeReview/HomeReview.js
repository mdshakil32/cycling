import React, { useState } from 'react';
import Rating from 'react-rating';
import { useEffect } from 'react';

const HomeReview = () => {
    const [reviews,setReviews] = useState([]);

    // get reviews
    useEffect(()=>{
        fetch('https://calm-badlands-73470.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[]);

    return (
        <div className=" py-5">
       <div className="container  ">
                <h1 className="text-center mt-5">Customers Review</h1>
                <p  className="text-center mb-5 ">The real feedback from our loving customers. Their review will help you to understand us </p>
                <div className=" review-box">
                    {
                        reviews.map((review,index) =>  <div key={index} className="">
                            <div className="shadow p-3 my-3">
                                 <p className="fw-bold ">{review.name}</p> 
                                 <Rating 
                                 
                                    initialRating={review.rating}
                                    emptySymbol="far fa-star text-warning"
                                    fullSymbol="fas fa-star text-warning"
                                    readonly></Rating> || <span className="m-0">Rating: {review.rating} </span>
                                 <p className="mt-2">{review.review}</p> 
                            </div>
                        </div>)
                    }                    
                </div>
            </div>
            </div>
    );
};

export default HomeReview;