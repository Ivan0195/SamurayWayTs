import {
    addPostActionType,
    sendNewMessageActionType,
    StateType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType, UsersType
} from "./store";

let initialState  = { users: [
    {id: '1', userName: 'Viktor Tsoy'},
    {id: '2', userName: 'Corey Taylor'},
    {id: '3', userName: 'Jared Leto'},
    {id: '4', userName: 'Hoy'},
    {id: '5', userName: 'Misha Gorshnev'},
    {id: '6', userName: 'Tim McIlrath'}
]}
export const usersReducer = (state:UsersType = initialState, action:addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => {
return state
}






