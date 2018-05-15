import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu() {
        this.setState({menuOpen: false})
    }


    render() {

        const linkStyles = {
            color: 'white',
            textDecoration: 'none'
        }

        return (
            <div>
                <Menu right
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)} >
                    <ul>
                        <li onClick={() => this.closeMenu()}>
                            <NavLink to='/' style={linkStyles}> Home </NavLink>
                        </li>
                        <li onClick={() => this.closeMenu()}>
                            <NavLink to='/polls' style={linkStyles}> Polls </NavLink>
                        </li>
                        {!this.props.isLoggedIn ? (
                            <span className="nav-links-user-not-logged-in">
                                <li onClick={() => this.closeMenu()}>  <NavLink to='/register' style={linkStyles}> Register </NavLink> </li>
                                <li onClick={() => this.closeMenu()}>  <NavLink to='/login' style={linkStyles}> Log in </NavLink> </li>
                            </span>
                        ) : (
                                <span>
                                    <li onClick={() => this.closeMenu()}> <NavLink to='/polls/newpoll' style={linkStyles}> Create a poll </NavLink> </li>
                                    <li onClick={() => this.closeMenu()}> <NavLink to='/profile' style={linkStyles}> Profile </NavLink> </li>
                                    <li onClick={() => this.closeMenu()}> <NavLink to='/' onClick={this.props.logout} style={linkStyles}> Log out </NavLink> </li>
                                </span>
                            )}
                    </ul>
                </Menu >
            </div>
        )
    }
};

export default SideBar;