import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    AllUsersType,
    isFetchingInProgress,
    setAllUsers,
    setSelectedPage,
    toggleFollow, toggleFollowingInProgress
} from "../../Redux/all-users-reducer";
import UsersFuncComponent from "./UsercFuncComponent";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setAllUsers: (allUsers: AllUsersType) => void
    setSelectedPage: (page: number) => void
    isFetching: (isFetching:boolean) => void
    toggleFollowingInProgress: (isFetching:boolean, userId: number) => void
}

class UsersAPI extends React.Component <UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.isFetching(true)
        if (this.props.allUsers.items.length === 0) {
          usersAPI.getUsers(this.props.allUsers.selectedPage, this.props.allUsers.pageCount)
            .then(data => {
                this.props.isFetching(false)
                this.props.setAllUsers(data)
            })
        }
    }

    onPageChanged = (page: number) => {
        this.props.setSelectedPage(page)
        this.props.isFetching(true)
        usersAPI.getUsers(page, this.props.allUsers.pageCount)
            .then(data => {
            this.props.isFetching(false)
            this.props.setAllUsers(data)
        })
    }

    render() {


        return (
            <>
                {this.props.allUsers.isFetching
                    ?
                    <Preloader/>
                    : null}
                <UsersFuncComponent
                    allUsers={this.props.allUsers}
                    setUsers={this.props.setAllUsers}
                    setSelectedPage={this.props.setSelectedPage}
                    toggleFollow={this.props.toggleFollow}
                    onPageChange={this.onPageChanged}
                    isFetching={this.props.allUsers.isFetching}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                />

            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        allUsers: state.allUsers,
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleFollow: (id: number) => {
            dispatch(toggleFollowAC(id))
        },
        setUsers: (allUsers: AllUsersType) => {
            dispatch(setAllUsersAC(allUsers))
        },
        setSelectedPage: (page: number) => {
            dispatch(setSelectedPageAC(page))
        },
        toggleIsFetching: (isFetching:boolean) => {
            dispatch(isFetchingAC(isFetching))
        }
    }
}*/

const a = {
    toggleFollow,
    setAllUsers,
    setSelectedPage,
    isFetching: isFetchingInProgress,
    toggleFollowingInProgress
}

export const UsersCContainer = connect(mapStateToProps, a)(UsersAPI);