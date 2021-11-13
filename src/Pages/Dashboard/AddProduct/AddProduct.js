import React, { useState } from 'react';
import "./AddProduct.css"

const AddProduct = () => {
    const [addItemData,setAddItemData]=useState({});


    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newItem = {...addItemData};
        newItem[field] = value;
        setAddItemData(newItem);
    }
    
    const handaleAddProduct =(e)=>{
        fetch('https://calm-badlands-73470.herokuapp.com/products',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addItemData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Item added successfully');
                e.target.reset();
            }
        })
        e.preventDefault()
    }

    return (
        <div className="container ">
            <div className="row px-2 mt-5">
            <div className="col-md-6 col-12 mx-auto ">
                <h1 className="text-muted text-center mb-5  ">Add a New Product</h1>
                    <form onSubmit={handaleAddProduct}>

                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Product Model</span>
                            <input 
                            type="text" 
                            name="model" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Model"  />
                        </div>

                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="basic-addon1">Category</span>
                            <input 
                            type="text" 
                            name="category" 
                            onChange={handleOnChange}
                            className="form-control" 
                            placeholder="Category"  />
                        </div>

                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="basic-addon1">Price</span>
                            <input 
                            type="text" 
                            name="price" 
                            onChange={handleOnChange}
                            className="form-control  " 
                            placeholder="Price"  />
                        </div>

                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="basic-addon1">Image URL</span>
                            <input 
                            rows="3" 
                            type="text" 
                            name="image" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Image"  />
                        </div>

                        <div className="input-group-lg input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Description</span>
                            <textarea 
                            rows="3" 
                            type="text" 
                            name="description" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Description"  />
                        </div>

                        <button type="submit" className="btn btn-success mt-4 w-100  fs-4">Add Product</button>
                        </form>
                    </div>
                    </div>
        </div>
    );
};

export default AddProduct;