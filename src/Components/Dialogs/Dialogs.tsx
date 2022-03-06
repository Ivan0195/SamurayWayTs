import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Messages, MessagesPropsType} from "./Messages/Messages";
import {
    addPostActionType, sendNewMessageActionType,
    store, updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "../../Redux/State";
import {sendNewMessageAC, updateNewMessageTextAC} from "../../Redux/messages-reducer";

export type DialogsPropsType = {
    forDialogItem: Array<DialogItemPropsType>
    forMessages: Array<MessagesPropsType>
    newMessageText: string
    dispatch: (action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageText = props.newMessageText

    const onSendMessageClick = () => {
        props.dispatch(sendNewMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.forDialogItem.map(m => (<DialogItem userName={m.userName} id={m.id}/>))}
            </div>
            <div className={classes.messages}>
                <div>{props.forMessages.map(m => <Messages message={m.message}/>)}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'} value={newMessageText} onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

