import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const ShopItem = () => {
    const {user} = useAuth();
    const {id} =useParams();
    const history = useHistory();
    const [product,setProduct]=useState({});

    const initialInfo = {
        customerName:user.displayName,
        email:user.email}

    const [order,setOrder]=useState(initialInfo);
    console.log(order);
    

    useEffect(()=>{
        fetch( `https://calm-badlands-73470.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            console.log(data);
        })
    },[]);




    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newOrder = {...order};
        newOrder[field] = value;
        setOrder(newOrder);
    }
    
    const handleOrder =(e)=>{
        order.status = 'pending';
        order.model = product.model;
        order.category = product.category;
        order.price = product.price;
        order.image = product.image;
        fetch('https://calm-badlands-73470.herokuapp.com/orders',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if(data.insertedId){
                alert('Placed Order successfully');
                e.target.reset();
                history.push('/dashboard/myOrders')
            }
        })

        e.preventDefault()
        console.log('order item',order);
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container py-5 ">
            <div className="row px-2 mt-5">
                <div className="col-md-6">
                    <h2>Fill up the form to place order</h2>
                    <div>
                        <img src={product.image} className="w-75" alt="" />
                    </div>
                    <p>{product.description}</p>
                </div>
                <div className="col-md-6 col-12  ">
                    <form onSubmit={handleOrder}>

                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Product Model</span>
                                <input 
                                disabled
                                type="text" 
                                name="model" 
                                onChange={handleOnChange}
                                defaultValue={product.model}
                                className="form-control " 
                                placeholder="Model"  />
                            </div>

                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Category</span>
                                <input 
                                disabled
                                type="text" 
                                name="category" 
                                onChange={handleOnChange}
                                defaultValue={product.category}
                                className="form-control" 
                                placeholder="Category"  />
                            </div>

                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Price $</span>
                                <input 
                                disabled
                                type="text" 
                                name="price" 
                                onChange={handleOnChange}
                                defaultValue={product.price}
                                className="form-control  " 
                                placeholder="Price"  />
                            </div>

                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Customer Name</span>
                                <input 
                                rows="3" 
                                type="text" 
                                name="customerName" 
                                onChange={handleOnChange}
                                defaultValue={user?.displayName}
                                className="form-control " 
                                placeholder="Name"  />
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                                <input 
                                rows="3" 
                                type="email" 
                                name="email" 
                                onChange={handleOnChange}
                                defaultValue={user?.email}
                                className="form-control " 
                                placeholder="Email"  />
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Phone</span>
                                <input 
                                rows="3" 
                                type="text" 
                                name="phone" 
                                onChange={handleOnChange}
                                className="form-control " 
                                placeholder="Phone"  />
                            </div>

                            <div className=" input-group input-group-lg mb-3">
                                <span className="input-group-text" id="basic-addon1">Address</span>
                                <textarea 
                                rows="2" 
                                type="text" 
                                name="address" 
                                onChange={handleOnChange}
                                className="form-control " 
                                placeholder="Address"  />
                            </div>

                            <button type="submit" className="btn btn-success mt-4 w-100  fs-4">Place Order</button>
                        </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ShopItem;