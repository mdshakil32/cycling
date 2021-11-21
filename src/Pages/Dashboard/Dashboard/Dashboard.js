import React from 'react';
import { Link,BrowserRouter ,Switch,Route,useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import Navigation from '../../Shared/Navigation/Navigation';
import AddProduct from '../AddProduct/AddProduct';
// import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
// import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
// import Home from '../../Home/Home/Home';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin,logout,user} = useAuth();
    return (
        <div>
            {/* <div className="w-100 bg-success  text-white fs-2 py-1 dashboard-name navbar-fixed-top">Dashboard</div> */}
            
            <div className="sidebar">
                <Link className="active" to='/' >Home</Link>
                
                
                <div >
                    <Link to={`${url}/myOrders`} ><i className="fas fa-shopping-bag"></i> My Orders</Link>
                    <Link to={`${url}/review`} ><i className="fas fa-star-half-alt"></i> Add Review</Link>
                    <Link to={`${url}/payment`} ><i className="fas fa-money-check-alt"></i>  Payment</Link>
                </div>
                
                 
                <div>
                    <Link to={`${url}/manageAllOrder`} ><i className="fas fa-tasks"></i> Manage All Orders</Link>
                    <Link to={`${url}/addProduct`} ><i className="fas fa-plus"></i> Add A Product</Link>
                    <Link to={`${url}/makeAdmin`} ><i className="fas fa-user-plus"></i> Make Admin</Link>
                    {/* <Link to={`${url}/manageProducts`} >Manage Products</Link> */}
                </div>
                
                <Link to='/' onClick={logout} className="text-danger" ><i className="fas fa-sign-out-alt"></i> Logout</Link>
                <p className=" user-name text-success" ><i className="fas fa-user-tie"></i> {user?.displayName}</p>

                </div>
               

                <div className="content p-0"> 
                <div className="w-100 bg-success  text-white fs-2 py-1 dashboard-name navbar-fixed-top">Dashboard</div>  
                <Switch>
                    <Route exact path={path}>
                        {!admin &&  <MyOrders></MyOrders>}
                        {admin &&  <ManageAllOrders></ManageAllOrders>}
                        
                    </Route>

                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>

                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <Route path={`${path}/manageAllOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    {/* <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route> */}

                </Switch>
                
                </div>
        </div>
    );
};

export default Dashboard;