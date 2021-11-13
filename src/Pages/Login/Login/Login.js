import React, { useState } from 'react';
import { Link,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import "./Login.css"

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,isLoading,error} = useAuth();
    let history = useHistory();
    let location = useLocation();


    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
    const handaleLogin =e =>{
        console.log('handaleLogin', loginData);
        loginUser(loginData.email,loginData.password,history, location);
        e.preventDefault();
    }


    return (
        <div>
            <Navigation></Navigation>
            <div className="container ">
            <div className="row px-2">
                <h2>{user?.name} </h2>
                <div className="col-md-5 mx-auto text-center login ">

                    {/* login form logo  */}
                    <div>
                        <img className="nav-logo" src="https://i.ibb.co/k2HSh55/logo.png" alt="" />
                    </div>
                    {
                        error && <h6 className="text-danger mt-4 ">{error}</h6>
                    }

                    {!isLoading &&  
                    <div className="form my-5 px-4" >
                    <form onSubmit={handaleLogin}>
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
                            className="form-control sss" 
                            placeholder="Password"  />
                        </div>

                        <button type="submit" className="btn btn-success mt-4 w-100  fs-4">Login</button>
                        </form>
                        </div>}

                    {
                        isLoading && <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </div>
                    }
                    <Link to="/register">New? Register Here</Link>

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

export default Login;