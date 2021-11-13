import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
 
  const {user,isLoading} = useAuth();
  if(isLoading){
      return <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
  }
 

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;