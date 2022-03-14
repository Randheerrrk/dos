import React from "react"
import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <p>Degree of Seperation</p>
            </div>
            <div className="nav">
                <Link className="nav-link" to="/users">Users</Link>
                <Link className="nav-link" to="/dos">DOS</Link>
            </div>
        </header>
    )
}

export default Header