import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    userName: string
    id: string
}

export type MessagePropsType = {
    message: string
}




export const DialogItem = (props: DialogItemPropsType) => {
    return <div className={classes.dialog + " " + classes.active}>
        <NavLink to={'/dialogs/'+props.id}>{props.userName}</NavLink>
    </div>
}

export const Message = (props:MessagePropsType)=> {
  return  <div className={classes.message}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id={'1'} userName={'Viktor Tsoy'}/>
                <DialogItem id={'2'} userName={'Corey Taylor'}/>
                <DialogItem id={'3'} userName={'Jared Leto'}/>
                <DialogItem id={'4'} userName={'Hoy'}/>
                <DialogItem id={'5'} userName={'Misha Gorshnev'}/>
                <DialogItem id={'6'} userName={'Tim McIlrath'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Answer your phone'}/>
                <Message message={'Add me to your friend =)'}/>
                <Message message={'Do you remember anything from the last party?'}/>
            </div>
        </div>
    );
};

