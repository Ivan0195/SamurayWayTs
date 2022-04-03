import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    setAuthUserData: (data:AuthType) => void
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}


const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export const HeaderAPI = connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

