import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {getUser} from "./Common"

const ProtectedRoutes = ({Cmp: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render = {
            props => {
             return   getUser() ? <Component {...props} /> : <Redirect to={{pathname:"/login", state: { from: props.location}}} />
            }
        }
        />
    )
}


export default ProtectedRoutes
