import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [review,setReview]=useState({});
    const {user} = useAuth();


    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }
    
    const handleAddReview =(e)=>{
        review.name = user.displayName;
        fetch('https://calm-badlands-73470.herokuapp.com/reviews',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Review added successfully');
                e.target.reset();
            }
        })
        
        // console.log(review);
        e.preventDefault()
    }

    return (
        <div className="container ">
            <div className="row px-2 mt-5">
            <div className="col-md-6 col-12 mx-auto text-center">
                <h1 className="text-muted text-center mb-5  " >Post Your Review </h1>
                    <form onSubmit={handleAddReview}>

                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
                            <input 
                            disabled
                            type="text" 
                            name="name" 
                            onChange={handleOnChange}
                            defaultValue={user.displayName}
                            className="form-control " 
                            placeholder="Your Name"  />
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Rating</span>

                            <input 
                            type="text" 
                            name="rating" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Rate 1-5"  />
                        </div>


                        <div className="input-group-lg input-group mb-3">
                            
                            <textarea 
                            rows="3" 
                            type="text" 
                            name="review" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Write Your Comment"  />
                        </div>

                        <button type="submit" className="btn btn-success mt-4 w-100  fs-4">Post Review</button>
                        </form>
                    </div>
                    </div>
        </div>
    );
};

export default Review;