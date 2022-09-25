import React from "react";

import styles from "./AuthForm.module.scss";
import Input from "../Input";
import Button from "../Button";

interface AuthFormProps {
    onSubmit: Function
    setEmail: Function
    email: string
    setPassword: Function
    password: string
}

const AuthForm = ({onSubmit, setEmail, email, setPassword, password}: AuthFormProps) => {

    return (
        <div className={styles.authContainer}>
            <div className={styles.auth__inner}>
                <h1 className={styles.auth__title}>Auth</h1>
                <Input 
                    placeholder="Email"
                    type="email"
                    onChange={setEmail}
                    value={email}
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    onChange={setPassword}
                    value={password}
                />
                <Button 
                    onSubmit={onSubmit}
                    text={"authentication"}
                />
            </div>
        </div>
    )
}

export default AuthForm