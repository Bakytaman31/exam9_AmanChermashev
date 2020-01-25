import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Contacts</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="addContact">
                                <button className='btn btn-primary'>Add contact</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;