import React from "react";
import AddUser from "../AddUserForm";
import Button from "../Button";
import styles from "./ContactItemForm.module.scss";

interface ContactItemFormProps {
    firstName: string
    lastName: string
    phoneNumber: string
    id: Number
    deleteUser: Function
    setForceUpdate: Function
    forceUpdate: boolean
    onUpdateModal: Function
    setId: Function
}

const ContactItemForm = ({
    firstName, 
    lastName, 
    phoneNumber, 
    id, 
    deleteUser, 
    setForceUpdate, 
    forceUpdate, 
    onUpdateModal,
    setId,
}: ContactItemFormProps) => {

    const onDelete = () => {
        deleteUser(id)
        setForceUpdate(!forceUpdate)
    }

    const onUpdate = () => {
        setId(id)
        onUpdateModal()
    }

    return (
        <div className={styles.item__container}>
            <div className={styles.item__container_inner}>
                <div className={styles.item__info}>
                    <h5>{firstName} {lastName}</h5>
                    <h5>{phoneNumber}</h5>
                </div>
                <div className={styles.item__info}>
                    <Button 
                        text={"update"}
                        onSubmit={onUpdate}
                    />
                    <Button 
                        text={"delete"}
                        onSubmit={onDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactItemForm