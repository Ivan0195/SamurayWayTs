import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to='/dialogs/1'>Viktor Tsoy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Corey Taylor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'> Jared Leto</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Hoy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'> Misha Gorshnev</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'> Tim McIlrath</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Answer your phone</div>
                <div className={classes.message}>Add me to your friend =)</div>
                <div className={classes.message}>Do you remember anything from the last party?</div>
            </div>
        </div>
    );
};

