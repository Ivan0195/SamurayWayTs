import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMeTC, AuthType, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";


export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    authMeTC: () => void
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.authMeTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}


const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export const HeaderAPI = connect(mapStateToProps, {authMeTC})(HeaderContainer)

