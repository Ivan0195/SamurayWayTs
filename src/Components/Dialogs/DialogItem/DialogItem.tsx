import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    userName: string
    id: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    return <div>
        <NavLink className={ nav => nav.isActive ? classes.active : classes.dialog } to={'/dialogs/'+props.id}>{props.userName}</NavLink>
    </div>
}
