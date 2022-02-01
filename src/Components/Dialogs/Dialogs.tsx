import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Messages, MessagesPropsType} from "./Messages/Messages";

export type DialogsPropsType = {
    forDialogItem: Array<DialogItemPropsType>
    forMessages: Array<MessagesPropsType>
}

export const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.forDialogItem.map(m=>(<DialogItem userName={m.userName} id={m.id}/>))}
            </div>
            <div className={classes.messages}>
                {props.forMessages.map(m=><Messages message={m.message}/>)}
            </div>
        </div>
    );
};

