import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {MessagesType, UsersBodyType} from "../../Redux/store";
import {Navigate} from "react-router-dom";

export type DialogsPropsType = {
    forDialogItem: Array<UsersBodyType>
    forMessages: MessagesType
    newMessageText: string
    isAuth: boolean
    sendMessage: ()=>void
    updateMessageText: (text:string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageText = props.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    if(props.isAuth===false) return <Navigate to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.forDialogItem.map(m => (<DialogItem userName={m.userName} key={m.id} id={m.id}/>))}
            </div>
            <div className={classes.messages}>
                <div>{props.forMessages.messages.map(m => <Messages message={m.message} key={m.id}/>)}</div>
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

