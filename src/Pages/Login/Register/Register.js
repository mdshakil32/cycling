import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import "./Register.css"
const Register = () => {

    const {registerUser,isLoading,error} = useAuth();
    const [loginData,setLoginData]=useState({});
    const history = useHistory();

    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
    
    const handaleUserRegister =(e)=>{
        registerUser(loginData.name,loginData.email,loginData.password,history)
        e.preventDefault()
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container ">
            <div className="row px-2">
                <div className="col-md-5 mx-auto text-center login ">

                    {/* login form logo  */}
                    <div>
                        <img className="nav-logo" src="https://i.ibb.co/k2HSh55/logo.png" alt="" />
                        
                    </div>
                    {
                        error && <h6 className="text-danger mt-4 ">{error}</h6>
                    }

                    { !isLoading &&  <div className="form my-5 px-4" >
                    <form onSubmit={handaleUserRegister}>

                        <div className="mb-3">
                            <input 
                            type="text" 
                            name="name" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Name"  />
                        </div>

                        <div className="mb-3">
                            <input 
                            type="email" 
                            name="email" 
                            onChange={handleOnChange}
                            className="form-control " 
                            placeholder="Email"  />
                        </div>

                        <div className="mb-3 ">
                            <input 
                            type="password" 
                            name="password" 
                            onChange={handleOnChange}
                            className="form-control" 
                            placeholder="Password"  />
                        </div>

                        <button type="submit" className="btn btn-danger mt-4 w-100  fs-4">Register</button>
                        </form>
                    </div>}

                    {
                        isLoading && <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </div>
                    }

                    <Link to="/login">Registered? Login Here</Link>

                    {/* google login  */}
                    {/* <div>
                        <button  className=" google-btn mt-3">
                            <img src="https://i.ibb.co/yBWTQyX/download-2.png" alt="" />
                            Continue with google</button>
                        </div> */}
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;