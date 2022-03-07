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

export const messagesReducer = (state: MessagesType = initialState, action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => {

    switch (action.type) {

        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newText}
            break
        case 'SEND-NEW-MESSAGE':
            const newMessage = state.newMessageText
            const newMessageId = (state.messages.length + 2).toString()
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: newMessageId, message: newMessage}],
            }
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



