import React from 'react';
import classes from "../Dialogs.module.css";

export type MessagesPropsType = {
    message: string
}

export const Messages = (props:MessagesPropsType)=> {
    return  <div className={classes.message}>{props.message}</div>
}