import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ShopItem from './Pages/ShopItem/ShopItem';
import Store from './Pages/Store/Store';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/store'>
            <Store></Store>
          </Route>

          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

          <PrivateRoute path='/shopItem/:id'>
            <ShopItem></ShopItem>
          </PrivateRoute>

         

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

// https://i.ibb.co/Hg7Xv5b/banner-bicycle.png
// https://i.ibb.co/TkGXx1Q/banner-shape.png
// https://i.ibb.co/6bsT572/bicycle01.jpg
// https://i.ibb.co/6FsksNr/bicycle02.jpg
// https://i.ibb.co/QHCrjCP/bicycle03.jpg
// https://i.ibb.co/F4FwFq8/bicycle04-1.jpg
// https://i.ibb.co/F4FwFq8/bicycle04-1.jpg
// https://i.ibb.co/6JtQmpJ/bicycle05.jpg
// https://i.ibb.co/Tt17J8y/bicycle07.jpg
// https://i.ibb.co/YRV9h7W/bicycle08.jpg
// https://i.ibb.co/k2HSh55/logo.png
// https://i.ibb.co/zNBPLW2/name-bicycle2.png
