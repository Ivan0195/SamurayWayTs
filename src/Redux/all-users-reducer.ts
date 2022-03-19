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
    "status": null| string,
    "followed": boolean
}

export type AllUsersType = {
    items: Array<UserInfoType>
    "totalCount": number,
    "error": null | string
}

export type toggleFollowActionType = {
    type: 'TOGGLE-FOLLOW'
    id: number
}

export type setAllUsersActionType = {
    type: 'SET-ALL-USERS'
    allUsers: AllUsersType
}

let initialState  = {  "items": [
        /*{
            "name": "proslavafur",
            "id": 22905,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "romchesko_pazzi",
            "id": 22904,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Hakob1986",
            "id": 22903,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "nilubisan",
            "id": 22902,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "AxiixA",
            "id": 22901,
            "uniqueUrlName": null,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/22901/user-small.jpg?v=1",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/22901/user.jpg?v=1"
            },
            "status": "Хомячок флексит 10 часов под пхонк",
            "followed": false
        },
        {
            "name": "LordGudzo",
            "id": 22900,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "YourFriendBy",
            "id": 22899,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "mantry",
            "id": 22898,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "matry",
            "id": 22897,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Altmer",
            "id": 22896,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }*/
    ],
    "totalCount": 17913,
    "error": null}
export const allUsersReducer = (state: AllUsersType = initialState, action:addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType | toggleFollowActionType | setAllUsersActionType) => {
switch (action.type){
    case 'TOGGLE-FOLLOW':
        let stateCopy = {
            ...state,
            items: state.items.map(m=>m.id===action.id ? {...m, followed: !m.followed} : {...m})
        }
        return stateCopy
    case 'SET-ALL-USERS': {
        return {...state, items: [...action.allUsers.items]}
    }
    default: return state
}
}

export const toggleFollowAC = (id: number):toggleFollowActionType => {
return {type: 'TOGGLE-FOLLOW', id}
}

export const setAllUsersAC = (allUsers:AllUsersType):setAllUsersActionType=> ({type:'SET-ALL-USERS', allUsers})







