import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {AllUsersType, setAllUsersAC, setSelectedPageAC, toggleFollowAC} from "../../Redux/all-users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import UsersFuncComponent from "./UsercFuncComponent";

export type UsersPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setUsers: (allUsers: AllUsersType) => void
    setSelectedPage: (page:number) => void
}

class UsersAPI extends React.Component <UsersPropsType> {

    constructor(props:UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        if(this.props.allUsers.items.length === 0) {axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.allUsers.selectedPage}&count=${this.props.allUsers.pageCount}`).then(response => this.props.setUsers(response.data))}
    }

    onPageChanged = (page:number) =>{
        this.props.setSelectedPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.allUsers.pageCount}`).then(response => this.props.setUsers(response.data))
    }

    render() {



        return (
            <UsersFuncComponent allUsers={this.props.allUsers} setUsers={this.props.setUsers} setSelectedPage={this.props.setSelectedPage} toggleFollow={this.props.toggleFollow} onPageChange={this.onPageChanged}/>
        )
    }
}

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
    },
    setSelectedPage: (page:number) => {
        dispatch(setSelectedPageAC(page))
    }
}
}
export const UsersCContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);