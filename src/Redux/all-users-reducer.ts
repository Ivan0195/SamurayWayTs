import {
    addPostActionType,
    sendNewMessageActionType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./store";

export type UserInfoType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null | string,
    "photos": {
        "small": null | string,
        "large": null | string
    },
    "status": null | string,
    "followed": boolean
}

export type AllUsersType = {
    items: Array<UserInfoType>
    "totalCount": number,
    "error": null | string
    "pageCount": number,
    "selectedPage": number
    isFetching: boolean
}

export type toggleFollowActionType = {
    type: 'TOGGLE-FOLLOW'
    id: number
}

export type setAllUsersActionType = {
    type: 'SET-ALL-USERS'
    allUsers: AllUsersType
}

export type setSelectedPageActionType = {
    type: 'SET-SELECTED-PAGE'
    selectedPage: number
}

export type toggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

let initialState = {
    "items": [],
    "totalCount": 17913,
    "error": null,
    "pageCount": 50,
    "selectedPage": 1,
    "isFetching": false
}
export const allUsersReducer = (
    state: AllUsersType = initialState,
    action: addPostActionType |
        updateNewPostTextActionType |
        updateNewMessageTextActionType |
        sendNewMessageActionType |
        toggleFollowActionType |
        setAllUsersActionType |
        setSelectedPageActionType |
        toggleIsFetchingActionType) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW':
            let stateCopy = {
                ...state,
                items: state.items.map(m => m.id === action.id ? {...m, followed: !m.followed} : {...m})
            }
            return stateCopy
        case 'SET-ALL-USERS': {
            return {...state, items: [...action.allUsers.items]}
        }
        case "SET-SELECTED-PAGE": {
            return {...state, selectedPage: action.selectedPage}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const toggleFollow = (id: number): toggleFollowActionType => {
    return {type: 'TOGGLE-FOLLOW', id}
}

export const setAllUsers = (allUsers: AllUsersType): setAllUsersActionType => ({type: 'SET-ALL-USERS', allUsers})

export const setSelectedPage = (page: number) => {
    return {
        type: 'SET-SELECTED-PAGE',
        selectedPage: page
    }
}
export const isFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}







