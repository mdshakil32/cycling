import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({product}) => {
    const {model,image,price,description,category,_id} = product;
    const history = useHistory();

    const handleShop=id=>{
        console.log('item clicked',id);
        history.push(`/shopItem/${id}`)

    }
    return (
        <div className="col-md-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
                <img className="w-100" src={image} alt="" />
                <h3>Bike {model} </h3>
                <p >{category} </p>
                <p>{category}>{description}</p>
                <h5 className="fw-bold">${price} </h5>
                <button onClick={()=> handleShop(_id)} className="btn btn-danger px-4 my-4">Shop Now</button>
            </div>
        </div>
    );
};

export default Product;