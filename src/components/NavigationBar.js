import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

class NavigationBar extends Component {

    render() {

        const linkStyles = {
            color: 'white',
            textDecoration: 'none'
        }



        return (
            <div className='container' >
                <nav className='nav-bar'>
                    <div className='nav-logo' style={{display: 'inline'}}>
                        <h2> POLLFI </h2>
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li>
                                <NavLink to='/' style={linkStyles}> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to='/polls' style={linkStyles}> Polls </NavLink>
                            </li>
                            {!this.props.isLoggedIn ? (
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
                    </div>
                </nav>
            </div >
        )
    }
}

export default NavigationBar