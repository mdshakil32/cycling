import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import "./ManageAllOrders.css"

const ManageAllOrders = () => {
    const [allOrders,setAllOrders] =useState([]);
    const {user}=useAuth();

    // get all orders 
    useEffect(()=>{
        fetch('https://calm-badlands-73470.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            if(data.length !== 0){
                setAllOrders(data);
            }
        })
    },[]);

    // delete order 
    const handleDelete =(id)=>{
        fetch(`https://calm-badlands-73470.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
             if(data.deletedCount === 1){
                 alert("Confirm delete");
                 const remaining = allOrders.filter(order=> order._id !== id);
                 setAllOrders(remaining);
             }
        })
    }

    const [updatedOrder,setUpdatedOrder] = useState({});
    // click update 
    const clickUpdate=(data)=>{
        const newData = {id:data._id,status:data.status,model:data.model};
        setUpdatedOrder(newData);
    }

    // handle on change 
    const handleOnChange=(e)=>{
        updatedOrder.status = e.target.value;
    }

    // save update 
    const saveUpdate=(e)=>{
        // console.log(updatedOrder)
        fetch(`https://calm-badlands-73470.herokuapp.com/orders`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedOrder)
        })
        .then(res => res.json() )
        .then(data => {
            if(data.modifiedCount !==0){              
                fetch('https://calm-badlands-73470.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => {
                    if(data.length !== 0){
                        setAllOrders(data);
                        e.target.reset();
                    }
                })  
            }
        })
        
        e.preventDefault();
    }

    return (
        <div >
        <div className="container my-5">

            <h1 className="text-muted text-center mb-5  ">Manage All Orders</h1>

            <table className="table table-modified">
                <thead>
                    <tr className="p-2">
                    
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order =>
                            <tr key={order._id} className="p-2 align-middle">                 
                                <td data-label="Email">{order.email} </td>
                                <td data-label="Product"><img  src={order.image} alt="" /> </td>
                                <td className="" data-label="Model">{order.model}</td>
                                <td data-label="Price">${order.price}</td>
                                <td data-label="Status">{order.status} </td>
                                <td data-label="Actions">
                                    <button onClick={()=> clickUpdate(order) }  className="btn btn-success me-1 mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</button>

                                    <button onClick={()=> handleDelete(order._id)}  className="btn btn-danger mb-1" >Delete</button>
                                </td>
                            </tr>
                            )
                    }
                    
                </tbody>
            </table>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Product: {updatedOrder.model}  </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className="fw-bold">Select Status</p>
                        <form onSubmit={saveUpdate} >
                        <select onChange={handleOnChange} className="form-select" aria-label="Default select example">
                            <option defaultValue>Select</option>
                            <option  value="pending">pending</option>
                            <option value="shipped">shipped</option>
                        </select>
                        <input  type="submit" className="btn btn-success mt-4" data-bs-dismiss="modal" />
                        </form>
                    
                </div>
                {/* <div className="modal-footer">
                    <button  type="button" className="btn btn-success" data-bs-dismiss="modal">Save</button>
                </div> */}
                </div>
            </div>
            </div>
                              
        </div>
        </div>
    );
};

export default ManageAllOrders;