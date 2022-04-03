import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType, setAuthUserData} from "../../Redux/auth-reducer";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

export const Header = (props:HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src='https://www.logodesign.net/logo/building-on-crescent-4303ld.png?size=2&industry=company'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}

            </div>
        </header>
    );
};

