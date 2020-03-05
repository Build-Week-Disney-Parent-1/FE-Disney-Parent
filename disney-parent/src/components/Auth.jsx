import React from 'react';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import SwipeableRoutes from 'react-swipeable-routes';
import { Route } from 'react-router-dom';

function Auth({ setUserLogin }){
  return (
    <SwipeableRoutes>
				<Route 
					exact
					path="/login"
					render={(routeProps) => <SignInPage setUserLogin={setUserLogin} {...routeProps}/>}
				/>
				<Route
					exact
					path="/signup"
					render={(routeProps) => <SignUpPage setUserLogin={setUserLogin} {...routeProps}/>}
				/>
    </SwipeableRoutes>
  )
}

export default Auth