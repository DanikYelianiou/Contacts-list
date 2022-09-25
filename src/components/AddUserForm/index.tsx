import React from "react";

import styles from "./AddUserForm.module.scss";
import Input from "../Input/index";
import Button from "../Button/index";

interface AddUserProps {
    close: Function
    firstName: string
    setFirstName: Function
    lastName: string
    setLastName: Function
    phoneNumber: string
    setPhoneNumber: Function
    onAddContact: Function
    btnText: string
}

const AddUser = ({ close, firstName, setFirstName, lastName, setLastName, phoneNumber, setPhoneNumber, onAddContact, btnText}: AddUserProps) => {

    return (
        <div 
            className={styles.popup__fade}
            onClick={e => (e.currentTarget === e.target) && close(false)}
        >
            <div className={styles.popup}>
                <Input 
                    placeholder="Enter first name"
                    onChange={setFirstName}
                    value={firstName}
                />
                {!firstName && <label>required field</label>}
                <Input 
                    placeholder="Enter last name"
                    onChange={setLastName}
                    value={lastName}
                />
                {!lastName && <label>required field</label>}
                <Input 
                    placeholder="Enter your phone"
                    onChange={setPhoneNumber}
                    value={phoneNumber}
                />
                {!phoneNumber && <label>required field</label>}
                <Button 
                    text={btnText}
                    onSubmit={onAddContact}
                />
            </div>
        </div>
    )
}

export default AddUser