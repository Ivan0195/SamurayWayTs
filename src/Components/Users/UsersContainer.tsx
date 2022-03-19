import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {AllUsersType, setAllUsersAC, toggleFollowAC} from "../../Redux/all-users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

const mapStateToProps = (state:AppStateType) => {
return {
    allUsers: state.allUsers
}
}

const mapDispatchToProps = (dispatch:Dispatch) => {
return{
    toggleFollow: (id: number) => {
        dispatch(toggleFollowAC(id))
    },
    setUsers: (allUsers:AllUsersType) => {
        dispatch(setAllUsersAC(allUsers))
    }
}
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);