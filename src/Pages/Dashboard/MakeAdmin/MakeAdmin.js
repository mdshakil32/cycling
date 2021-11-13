import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState({});
    const [success,setSuccess]=useState(false);


    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newEmail = {...email};
        newEmail[field] = value;
        setEmail(newEmail);
    }
    
    const handleMakeAdmin=(e)=>{
        fetch(`https://calm-badlands-73470.herokuapp.com/users/admin`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(email)
        })
        .then(res => res.json() )
        .then(data => {
            if(data.modifiedCount !==0){
                setSuccess(true);
                alert('Make Admin Successfull');
                e.target.reset();
            }
            if(data.modifiedCount ===0){
                // setSuccess(true);
                alert('Your are Already Admin');
                e.target.reset();
            }
            console.log(data);
        })
        e.preventDefault()
        console.log('admin',email);
    }
    return (
        <div className="container ">
            <div className="row px-2 mt-5">
            <div className="col-md-6 col-12 mx-auto text-center">
                <h1 className="text-muted text-center mb-5  " >Make A New Admin </h1>
                    {/* {success &&  <h5>Make Admin Successfull</h5>} */}
                    <form onSubmit={handleMakeAdmin}>

                        <div className="input-group input-group-lg mb-3">

                            <input 
                            type="email" 
                            name="email" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Enter Email"  />
                        </div>

                        <button type="submit" className="btn btn-danger mt-4 w-100  fs-4">Make Admin</button>
                        </form>
                    </div>
                    </div>
        </div>
    );
};

export default MakeAdmin;