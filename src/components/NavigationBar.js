import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavigationBar extends Component {

    render() {
        return (
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <h2> POLLFI </h2>
                    <div className='nav-links'>
                        <ul>
                            <li>
                                <NavLink to='/'> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to='/polls'> Polls </NavLink>
                            </li>
                            {!this.props.isLoggedIn ? (
                                <li>  <NavLink to='/login'> Log in </NavLink> </li>
                            ) : (
                                    <span>
                                        <li> <NavLink to='/polls/newpoll'> Create a poll </NavLink> </li>
                                        <li> <NavLink to='/profile'> Profile </NavLink> </li>
                                        <li> <NavLink to='/logout' onClick={this.props.logout}> Log out </NavLink> </li>
                                    </span>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar