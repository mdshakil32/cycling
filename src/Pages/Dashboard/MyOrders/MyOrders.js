import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const {user}=useAuth();
    const [myOrders,setMyOrders] = useState([]);
    const history =  useHistory();

    // get my orders 
    useEffect(()=>{
        fetch(`https://calm-badlands-73470.herokuapp.com/orders/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            if(data.length !== 0){
                setMyOrders(data);
            }
        })
    },[]);

    // cancel order 
    const handleCancel =(id)=>{
        fetch(`https://calm-badlands-73470.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
             if(data.deletedCount === 1){
                 alert("Confirm delete");
                 const remaining = myOrders.filter(order=> order._id !== id);
                 setMyOrders(remaining);
             }
        })
    }

    // handle pay  
    const handlePay =(e)=>{
        history.push('/dashboard/payment')
    }

    return (
        <div >
        <div className="container my-5">

            <h1 className="text-muted text-center mb-5  ">My Orders</h1>
            <div className="row">
            {
                myOrders.map(order =>
                    <div key={order._id} className="col-lg-3 col-md-4 "> 
                    <div className="shadow p-2 mb-4 text-center">
                        <img src={order.image} className="w-75" alt="" />
                                    
                        <h3 data-label="Name" className="text-capitalize">{order.model}</h3>
                        <p >Customer: {order.customerName}</p>
                        <p >Price: ${order.price} </p>
                        <p >Status: {order.status} </p>
                        <div >
                        <button onClick={()=> handleCancel(order._id) } className="btn btn-danger mb-1 me-1" >Cancel Order</button>
                        
                        <button onClick={handlePay} className="btn btn-success mb-1" >Pay Now</button>
                        </div>
                        </div>
                    </div>
                    )
                    }
            </div>
                              
        </div>
        </div>
    );
};

export default MyOrders;