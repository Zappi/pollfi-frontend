import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const SideBar = (props) => {
    const linkStyles = {
        color: 'white',
        textDecoration: 'none'
    }

    return (


        <button>
            <Menu>
                <ul>
                    <li>
                        <NavLink to='/' style={linkStyles}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/polls' style={linkStyles}> Polls </NavLink>
                    </li>
                    {!props.isLoggedIn ? (
                        <span className="nav-links-user-not-logged-in">
                            <li>  <NavLink to='/register' style={linkStyles}> Register </NavLink> </li>
                            <li>  <NavLink to='/login' style={linkStyles}> Log in </NavLink> </li>
                        </span>
                    ) : (
                            <span>
                                <li> <NavLink to='/polls/newpoll' style={linkStyles}> Create a poll </NavLink> </li>
                                <li> <NavLink to='/profile' style={linkStyles}> Profile </NavLink> </li>
                                <li> <NavLink to='/logout' onClick={this.props.logout} style={linkStyles}> Log out </NavLink> </li>
                            </span>
                        )}
                </ul>
            </Menu>
        </button>

    );
};

export default SideBar;