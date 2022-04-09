import React from 'react';
import {MessagesType, UsersBodyType} from "../../Redux/store";
import {sendNewMessageAC, updateNewMessageTextAC} from "../../Redux/messages-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type MapToPropsType = {
    forDialogItem: Array<UsersBodyType>,
    forMessages: MessagesType,
    newMessageText: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateMessageText: (text:string)=> void,
    sendMessage: ()=> void,
}

let mapStateToProps=(state: AppStateType):MapToPropsType=>{
    return {
        forDialogItem: state.users.users,
        forMessages: state.messages,
        newMessageText: state.messages.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        updateMessageText: (text:string)=> {dispatch((updateNewMessageTextAC(text)))},
        sendMessage: ()=>{dispatch(sendNewMessageAC())}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)






















/*
export const DialogsContainer = () => {

    const updateMessageText = (text:string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }

    const sendMessage = () => {
        props.store.dispatch(sendNewMessageAC())
    }

    return (
        <Dialogs
            forDialogItem={props.store.getState().users.users}
            forMessages={props.store.getState().messages}
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            newMessageText={props.store.getState().messages.newMessageText}
        />
    );
};*/
