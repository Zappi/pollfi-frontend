import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Media from "react-media";
import { slide as Menu } from 'react-burger-menu'
import SideBar from './SideBar';

class NavigationBar extends Component {

    showSettings(event) {
        event.preventDefault()
    }


    render() {

        const linkStyles = {
            color: 'white',
            textDecoration: 'none'
        }



        return (
            <nav className='nav-bar'>
                <div className='nav-logo' style={{ display: 'inline' }}>
                    <h2>
                        <NavLink to={'/'} style={linkStyles}> POLLFI </NavLink>
                    </h2>
                </div>

                <Media query="(min-width: 770px)">
                    {matches =>
                        matches ? (
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
                                                <li> <NavLink to='/' onClick={this.props.logout} style={linkStyles}> Log out </NavLink> </li>
                                            </span>
                                        )}
                                </ul>
                            </div>

                        ) : (
                                <SideBar isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} />
                            )
                    }
                </Media>



            </nav>
        )
    }
}

export default NavigationBar