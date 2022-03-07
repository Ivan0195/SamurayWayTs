import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {UsersBodyType} from "../../../Redux/store";

export const DialogItem = (props: UsersBodyType) => {
    return <div>
        <NavLink className={ nav => nav.isActive ? classes.active : classes.dialog } to={'/dialogs/'+props.id}>{props.userName}</NavLink>
    </div>
}
