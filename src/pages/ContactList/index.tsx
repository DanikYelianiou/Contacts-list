import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import ContactItemForm from "../../components/ContactItemForm";
import * as userActions from '../../redux/User/actions';
import Button from "../../components/Button";
import "./style.scss";
import AddUser from "../../components/AddUserForm/index"

interface ContactListPageProps {
    users: Array<object>
    getUsers: Function
    deleteUser: Function
    updateUser: Function
    addUser: Function
}

const ContactListPage = ({users, getUsers, deleteUser, updateUser, addUser}: ContactListPageProps) => {

    const navigate = useNavigate();
    const [isForceUpdate, setIsForceUpdate] = useState(false)
    const [isAddModal, setIsAddModal] = useState(false)
    const [isUpdateModal, setIsUpdateModal] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [id, setId] = useState(0)

    const onAddModal = () => {
        setIsAddModal(true)
    }

    const onUpdateModal = () => {
        setIsUpdateModal(true)
    }

    const onAddContact = () => {
        if (firstName && lastName && phoneNumber) {
            const data = {
                firstName,
                lastName,
                phoneNumber
            }
            addUser(data)
        }

        setFirstName("")
        setLastName("")
        setPhoneNumber("")

        if (firstName && lastName && phoneNumber) {
            setIsAddModal(false)
        }
        setIsForceUpdate(!isForceUpdate)
    }

    const onUpdate = () => {
        if (firstName || lastName || phoneNumber) {
            const data = {
                id,
                firstName,
                lastName,
                phoneNumber
            }
            updateUser(data)
        }

        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setId(0)

        if (firstName && lastName && phoneNumber) {
            setIsUpdateModal(false)
        }
        setIsForceUpdate(!isForceUpdate)
    }

    useEffect(() => {
        getUsers()
        !localStorage.getItem("token") && navigate('/auth')
    }, [isForceUpdate, isAddModal, isUpdateModal])

    return (
        <div className="contact_list">
            <Button 
                text={"Add contact"}
                onSubmit={onAddModal}
            />
            {users && users.map((user: any, id) => (
                <div key={id}>
                    <ContactItemForm
                        firstName={user.firstName}
                        lastName={user.lastName}
                        phoneNumber={user.phoneNumber}
                        id={user.id}
                        deleteUser={deleteUser}
                        setForceUpdate={setIsForceUpdate}
                        forceUpdate={isForceUpdate}
                        onUpdateModal={onUpdateModal}
                        setId={setId}
                    />
                </div>
            ))}
            {
                isAddModal && 
                <AddUser 
                    close={setIsAddModal} 
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    onAddContact={onAddContact}
                    btnText="Add contact"
                />
            }
            {
                isUpdateModal && 
                <AddUser 
                    close={setIsUpdateModal} 
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    onAddContact={onUpdate}
                    btnText="Update contact"
                />
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.user.users,
});

const mapDispatchToProps = (dispatch: Function) => ({
    getUsers: (payload: any) => dispatch(userActions.getUsers(payload)),
    deleteUser: (payload: any) => dispatch(userActions.deleteUser(payload)),
    updateUser: (payload: any) => dispatch(userActions.updateUser(payload)),
    addUser: (payload: any) => dispatch(userActions.addUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListPage)