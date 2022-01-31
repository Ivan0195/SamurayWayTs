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
              {/*  <DialogItem id={'1'} userName={'Viktor Tsoy'}/>
                <DialogItem id={'2'} userName={'Corey Taylor'}/>
                <DialogItem id={'3'} userName={'Jared Leto'}/>
                <DialogItem id={'4'} userName={'Hoy'}/>
                <DialogItem id={'5'} userName={'Misha Gorshnev'}/>
                <DialogItem id={'6'} userName={'Tim McIlrath'}/>*/}
            </div>
            <div className={classes.messages}>
                {messages.map(m=><Message message={m.message}/>)}
              {/*  <Message message={'Answer your phone'}/>
                <Message message={'Add me to your friend =)'}/>
                <Message message={'Do you remember anything from the last party?'}/>*/}
            </div>
        </div>
    );
};

