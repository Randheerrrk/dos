import React from "react";

const Row = ({user}) => {
    
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.fullname}</td>
        </tr>
    )
}

export default Row;