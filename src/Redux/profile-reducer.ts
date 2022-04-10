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

export type MapStateToPropsType = {
    profile:ProfileType
}

export type MapDispatchToPropsType = {
    getProfileTC: (userId:string) => void
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
    }
}

const initialState = {}

export const profileReducer = (state: ProfileType | {} = initialState, action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType | SetUSerProfileAT) => {

    switch (action.type) {
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
            break
        }
        default:
            return state
    }
    return state
}

export const setUsersProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile})

export const getProfileTC = (userId:number) => (dispatch:Dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUsersProfile(data)))
}