import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className = { nav => nav.isActive ? classes.activeLink : classes.item }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className = { nav => nav.isActive ? classes.activeLink : classes.item }>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='news' className = { nav => nav.isActive ? classes.activeLink : classes.item }>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className = { nav => nav.isActive ? classes.activeLink : classes.item }>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className = { nav => nav.isActive ? classes.activeLink : classes.item }>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className = { nav => nav.isActive ? classes.activeLink : classes.item }>Users</NavLink>
            </div>
        </nav>
    );
};

