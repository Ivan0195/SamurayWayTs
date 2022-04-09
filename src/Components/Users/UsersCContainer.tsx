import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    AllUsersType,
    followTC,
    getUsersTC,
    setSelectedPage,
    toggleFollowingInProgress,
    unfollowTC
} from "../../Redux/all-users-reducer";
import UsersFuncComponent from "./UsercFuncComponent";
import Preloader from "../Common/Preloader";
import {Navigate} from "react-router-dom";

export type UsersPropsType = {
    allUsers: AllUsersType
    isAuth: boolean
    setSelectedPage: (page: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (selectedPage: number,
                 pageCount: number,
    ) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}

class UsersAPI extends React.Component <UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersTC(this.props.allUsers.selectedPage, this.props.allUsers.pageCount)
    }

    onPageChanged = (page: number) => {
        this.props.setSelectedPage(page)
        this.props.getUsersTC(page, this.props.allUsers.pageCount)
    }

    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <>
                {this.props.allUsers.isFetching
                    ?
                    <Preloader/>
                    : null}
                <UsersFuncComponent
                    allUsers={this.props.allUsers}
                    onPageChange={this.onPageChanged}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    follow={this.props.followTC}
                    unfollow={this.props.unfollowTC}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        allUsers: state.allUsers,
        isAuth: state.auth.isAuth
    }
}

const a = {
    setSelectedPage,
    toggleFollowingInProgress,
    getUsersTC,
    followTC,
    unfollowTC
}

export const UsersCContainer = connect(mapStateToProps, a)(UsersAPI);


/* this.props.isFetching(true)
      if (this.props.allUsers.items.length === 0) {
        usersAPI.getUsers(this.props.allUsers.selectedPage, this.props.allUsers.pageCount)
          .then(data => {
              this.props.isFetching(false)
              this.props.setAllUsers(data)
          })
      }*/


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