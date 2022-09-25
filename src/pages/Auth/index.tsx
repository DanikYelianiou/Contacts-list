import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from "../../components/AuthForm"
import * as userActions from '../../redux/User/actions';

interface AuthProps {
    userLogin: Function,
}

const AuthPage = ({userLogin}: AuthProps) => {

    const [email, setImail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // user1@gmail.com
    // testUser1

    const callback = () => (
        navigate("/")
    )

    const onSubmit = () => {
        userLogin({
            email,
            password,            
            callback
        })
    }

    return (
        <AuthForm 
            onSubmit={onSubmit}
            setEmail={setImail}
            email={email}
            setPassword={setPassword}
            password={password}
        />
    )
}

const mapStateToProps = (state: object) => ({

});
  
const mapDispatchToProps = (dispatch: Function) => ({
    userLogin: (payload: any) => dispatch(userActions.userLogin(payload)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
  