import {
    addPostActionType,
    sendNewMessageActionType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type SetUSerProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: any
}

export type SetStatusAT = {
    type: 'SET-STATUS'
    status: string
}

export type MapStateToPropsType = {
    profile: ProfileType
    status:string
}

export type MapDispatchToPropsType = {
    getProfileTC: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status:string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileType = {
    profile: {
        aboutMe: string | null,
        contacts: {
            facebook: string | null,
            website: string | null,
            vk: string | null,
            twitter: string | null,
            instagram: string | null,
            youtube: string | null,
            github: string | null,
            mainLink: string | null
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: string | null,
        fullName: string | null,
        userId: number,
        photos: {
            small: string,
            large: string
        }
    },
    status: string
}

const initialState = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export const profileReducer = (state: ProfileType = initialState, action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType | SetUSerProfileAT | SetStatusAT) => {

    switch (action.type) {
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
            break
        }
        case "SET-STATUS":
            debugger
            const stateCopy = {...state, status: action.status}
            debugger
            return stateCopy
        default:
            return state
    }
    return state
}

export const setUsersProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile})
export const setStatus = (status: string) => ({type: 'SET-STATUS', status})

export const getProfileTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUsersProfile(data)))
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}