import React from 'react';
import {ProfileComponent} from "../ProfileComponent";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {setUsersProfile} from "../../../Redux/posts-reducer";
import {getProfileTC, ProfilePropsType} from "../../../Redux/profile-reducer";
import {Navigate, useMatch} from "react-router-dom";
import {profileAPI} from "../../../api/api";


export class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        //@ts-ignore
        let userId = this.props.match.params.userId
        if (!userId){userId=2}
        this.props.getProfileTC(userId)
        /*profileAPI.getProfile(userId).then(data => this.props.setUsersProfile(data))*/
    }

    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <div>
                <ProfileComponent profile={this.props.profile}/>
            </div>
        );
    }
};

export const withRouter = (Component: any) =>{
    return (props: any) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    };
}


let mapStateToProps = (state:AppStateType) => ({
    profile: state.profile,
    isAuth: state.auth.isAuth
})



export const ProfileAPI = connect(mapStateToProps, {getProfileTC})(withRouter(ProfileContainer))

















/*      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data)
    })*/