import * as React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import logo from "../../../images/logo.png"

const Navigation = () => {
    const {user,logout} = useAuth();
    const handlelogout =(e)=>{
        logout();
        e.preventDefault()
    }

    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid ">
            <Link className="navbar-brand" to="/"><img src={logo} alt="" /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                <Link className="nav-link active mt-1" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link mt-1" to="/store">Store</Link>
                </li>

                {
                user?.email && <li className="nav-item">
                    <Link className="nav-link mt-1" to="/dashboard">Dashboard</Link>
                </li>
                }

                {
                    user?.email && <li className="nav-item"><button className="btn btn-info text-white me-1 mt-1" disabled><i className="fas fa-user-tie"></i> {user.displayName }</button>
                    
                </li>
                }
                {
                    user?.email? <li className="nav-item">
                    <button className="btn btn-danger mt-1" onClick={handlelogout}> <i className="fas fa-sign-out-alt"></i> Logout</button></li>:<li className="nav-item ">
                    <Link className="nav-link btn btn-success text-white px-3 mt-1" to="/login"> <i className="fas fa-sign-in-alt"></i> Login</Link>
                </li>
                }
                {/* {
                    user?.email && <li className="nav-item"><button className="btn btn-info text-white" disabled>{user.displayName }</button>
                    
                </li>
                } */}

                
            </ul>
            </div>
        </div>
    </nav>
    
    );
};

export default Navigation;
