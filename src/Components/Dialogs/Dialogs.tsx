import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = () => {

    const users = [
        {id:'1', userName:'Viktor Tsoy'},
        {id:'2', userName:'Corey Taylor'},
        {id:'3', userName:'Jared Leto'},
        {id:'4', userName:'Hoy'},
        {id:'5', userName:'Misha Gorshnev'},
        {id:'6', userName:'Tim McIlrath'}
    ]

    const messages = [
        {id:'1', message:'Answer your phone'},
        {id:'2', message:'Add me to your friend =)'},
        {id:'3', message:'Do you remember anything from the last party?'},
    ]



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {users.map(m=>(<DialogItem userName={m.userName} id={m.id}/>))}
            </div>
            <div className={classes.messages}>
                {messages.map(m=><Messages message={m.message}/>)}
            </div>
        </div>
    );
};

