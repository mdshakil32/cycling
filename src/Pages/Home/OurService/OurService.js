import React from 'react';
import "./OurService.css";

const OurService = ({service}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-service text-center p-4 mb-5 ">
                <img  src={service.image} className="" alt="" />
                <h3 className="my-4">{service.title}</h3>
                <p>{service.detail}</p>
            </div>
        </div>
    );
};

export default OurService;