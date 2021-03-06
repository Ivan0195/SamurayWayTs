import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {AllUsersType, setAllUsers, toggleFollow} from "../../Redux/all-users-reducer";

const mapStateToProps = (state:AppStateType) => {
return {
    allUsers: state.allUsers
}
}

const mapDispatchToProps = (dispatch:Dispatch) => {
return{
    toggleFollow: (id: number) => {
        dispatch(toggleFollow(id))
    },
    setUsers: (allUsers:AllUsersType) => {
        dispatch(setAllUsers(allUsers))
    }
}
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);