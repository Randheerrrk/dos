import React from 'react'

import Row from './Row'

const UserGrid = ({userList, setUserList}) => {
 
    return (
        <table className="user-table">
            <thead> 
                <tr>
                    <td>Username</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {Object.values(userList).map(user=> <Row key={user.username} user={user}/>)}
            </tbody>
        </table> 
    )
}

export default UserGrid;