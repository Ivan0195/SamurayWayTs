import {
    addPostActionType, MessagesType, PostsType,
    sendNewMessageActionType,
    StateType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./store";
import {store} from "./redux-store";

export type AuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type setUserDataAT = {
    type: 'SET-USER-DATA',
    data:AuthType
}


let initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType | setUserDataAT) => {

    switch (action.type) {

        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth:true}
            break
                default:
            return state
    }
    return state
}


export const setAuthUserData = (data:AuthType): setUserDataAT => ({
    type: 'SET-USER-DATA',
    data
})




