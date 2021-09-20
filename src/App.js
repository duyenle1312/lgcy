import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Explore from "./Pages/Explore";
import NotFound from "./Pages/NotFound";
import Timelines from "./Pages/Timelines";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/Homepage"
import Morrison from "./Pages/Morrison";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import LegalContainer from "./Pages/LegalContainer";
//import './App.css';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';
import ProtectedRoute from './helpers/protected-route';
//import * as ROUTES from './constants/routes';

export default function App() {
    const { user } = useAuthListener();
    return (
        <UserContext.Provider value={{ user }}>
        <BrowserRouter>
        <Switch>
                <Route path='/' component={Login} exact={true} /> {/*component={Welcome}*/}
                <Route path='/legal' component={LegalContainer} exact={true} />
                <Route path='/login' component={Login} exact={true} />
                <Route path='/signup' component={SignUp} exact={true} />
                <Route path='/morrison' component={Morrison} exact={true} />
                <Route path='/u/:username' component={Profile} />
                <Route path='/t/:username/:timeline' component={Timelines} />    
                <ProtectedRoute user={user} path='/homepage' exact>
                    <HomePage />
                </ProtectedRoute>   
                <ProtectedRoute user={user} path='/explore' exact>
                    <Explore />
                </ProtectedRoute>   
                <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
        </UserContext.Provider>
    );
}
