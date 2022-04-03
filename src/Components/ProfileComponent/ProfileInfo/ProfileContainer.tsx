import React from 'react';
import {ProfileComponent} from "../ProfileComponent";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {setUsersProfile} from "../../../Redux/posts-reducer";
import {ProfilePropsType} from "../../../Redux/profile-reducer";


export class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11440`).then(response => {
            this.props.setUsersProfile(response.data)
    })}

    render() {
        return (
            <div>
                <ProfileComponent profile={this.props.profile}/>
            </div>
        );
    }
};


let mapStateToProps = (state:AppStateType) => ({
    profile: state.profile
})

//@ts-ignore
export const ProfileAPI = connect(mapStateToProps, {setUsersProfile})(ProfileContainer)