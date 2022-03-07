import {
    addPostActionType, MessagesType, PostsType,
    sendNewMessageActionType,
    StateType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./store";


let initialState = {
    messages: [
    {id: '1', message: 'Answer your phone'},
    {id: '2', message: 'Add me to your friend =)'},
    {id: '3', message: 'Do you remember anything from the last party?'},
],
    newMessageText: '',
    }

export const messagesReducer = (state: MessagesType = initialState, action:addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => {

    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE-TEXT':
            const newState = {...state}
            newState.newMessageText = action.newText
            return newState
            break
        case 'SEND-NEW-MESSAGE':
            const newMessage = state.newMessageText
            const newMessageId = state.messages.length + 2
            const newState2 = {...state}
            newState2.newMessageText = ''
            newState2.messages=[...state.messages]
            newState2.messages.push({id: newMessageId.toString(), message: newMessage})
            return newState2
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



