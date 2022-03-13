import {
    addPostActionType,
    sendNewMessageActionType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./store";

export type UserInfoType = {
    id: string, userName: string, avaAddress: string , status: string, location: { city: string, country:string}, isFollowed: boolean
}

export type AllUsersType = {
    allUsers: Array<UserInfoType>
}

export type toggleFollowActionType = {
    type: 'TOGGLE-FOLLOW'
    id: string
}

export type setAllUsersActionType = {
    type: 'SET-ALL-USERS'
    allUsers: AllUsersType
}

let initialState  = { allUsers: [
    {id: '1', userName: 'Viktor Tsoy', avaAddress: 'https://b1.culture.ru/c/735787.jpg' , status: 'I am alive', location: {city: 'Moscow', country: 'Russia'} , isFollowed: true},
    {id: '2', userName: 'Corey Taylor', avaAddress: 'https://salvemusic.com.ua/wp-content/uploads/2020/10/corey-taylor-1024x576.jpg', status: 'Let me rock', location: {city: 'Iowa', country: 'USA'}, isFollowed: true},
    {id: '3', userName: 'Jared Leto', avaAddress: 'https://fs.kinomania.ru/file/person/c/ec/cec6f62cfb44b1be110b7bf70c8362d8.jpeg', status: 'I feel so happy', location: {city: 'LA', country: 'USA'}, isFollowed: false},
    {id: '4', userName: 'Hoy', avaAddress: 'https://peterburg.center/sites/default/files/img/event_m/2020-02/3ealj3jer9q.jpg', status: "Hey! What's up?", location: {city: 'St. Peterburg', country: 'Russia'}, isFollowed: true},
    {id: '5', userName: 'Misha Gorshnev', avaAddress: 'https://m.the-flow.ru/uploads/images/resize/830x0/adaptiveResize/13/97/19/48/63/425ad4140cd7.png', status: "Let's travel more", location: {city: 'Minsk', country: 'Belarus'}, isFollowed: false},
    {id: '6', userName: 'Tim McIlrath', avaAddress: 'https://i.pinimg.com/originals/b6/ab/43/b6ab431f8eaddd29b49f6a1ad8b5effc.jpg', status: 'Be kind to each other', location: {city: 'Huston', country: 'USA'}, isFollowed: true},
]}
export const allUsersReducer = (state: AllUsersType = initialState, action:addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType | toggleFollowActionType | setAllUsersActionType) => {
switch (action.type){
    case 'TOGGLE-FOLLOW':
        let stateCopy = {
            ...state,
            allUsers: state.allUsers.map(m=>m.id===action.id ? {...m, isFollowed: !m.isFollowed} : {...m})
        }
        return stateCopy
    case 'SET-ALL-USERS': {
        return {...state, allUsers: [...state.allUsers]}
    }
    default: return state
}
}

export const toggleFollowAC = (id: string):toggleFollowActionType => {
return {type: 'TOGGLE-FOLLOW', id}
}

export const setAllUsersAC = (allUsers:AllUsersType):setAllUsersActionType=> ({type:'SET-ALL-USERS', allUsers})







