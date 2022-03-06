import React from 'react';
import {
    addPostActionType,
    sendNewMessageActionType,
    StateType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./State";



export const messagesReducer = (state:StateType, action:addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => {

    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            break
        case 'SEND-NEW-MESSAGE':
            const newMessage = state.newMessageText
            const newMessageId = state.messages.length + 2
            state.newMessageText = ''
            state.messages.push({id: newMessageId.toString(), message: newMessage})
            break
        default:
            return state
    }
    return state
}


export const updateNewMessageTextAC = (newText: string): updateNewMessageTextActionType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText
})
export const sendNewMessageAC = (): sendNewMessageActionType => ({type: 'SEND-NEW-MESSAGE'})



