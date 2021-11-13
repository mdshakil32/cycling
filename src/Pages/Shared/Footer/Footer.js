import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    const newsLetter=e=>{
        e.preventDefault();
    }
    return (
        <footer className="py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://i.ibb.co/k2HSh55/logo.png" alt="" />
                        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        <div >
                            <Link  to="/"><img className="social-icon" src="https://i.ibb.co/zF546wy/1260673.png" alt="" /></Link> 

                            <Link  to="/"><img className="social-icon" src="https://i.ibb.co/Ltg6QCj/download-1.png" alt="" /></Link> 

                            <Link  to="/"><img className="social-icon" src="https://i.ibb.co/bBYpwsk/363-3632986-logo-linkedin-png-rond-transparent-png.png" alt="" /></Link> 

                            <Link  to="/"><img className="social-icon" src="https://i.ibb.co/jzwY70G/580b57fcd9996e24bc43c521.png" alt="" /></Link> 
                           
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>Overviews</h4>
                        <ul className="list-unstyled lh-lg">
                            <li><Link className="text-decoration-none text-dark"  to="/"> Home </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> About Us </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Cart </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Checkout </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Contact Us </Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled lh-lg">
                            <li><Link className="text-decoration-none text-dark"  to="/"> Road bikes </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Mountain bikes </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Hybrid bikes </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Cyclocross bikes </Link></li>
                            <li><Link  className="text-decoration-none text-dark" to="/"> Folding bikes </Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>Newsletter</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        <form onSubmit={newsLetter} >
                            <input type="text" className="form-control"  placeholder="Email here..." />
                            <input type="submit" className="btn btn-danger my-3 px-5"   />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;