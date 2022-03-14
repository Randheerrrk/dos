import React from "react";

import UserGrid from './UserGrid'
import UserForm from './UserForm'
import UserConnect from "./UserConnect";

import './User.css'

const Users = ({userList, setUserList}) => {
    return (
        <main>
            <UserForm className="user-form" userList={userList} setUserList={setUserList}/>
            <UserGrid userList={userList} setUserList={setUserList} />
            <UserConnect className="user-connect" userList={userList} setUserList={setUserList} />
        </main>
    )
}

export default Users;