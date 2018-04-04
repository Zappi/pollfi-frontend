import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {

    render() {
        return (
            <nav className='nav-bar'>
                <div>
                    <div>
                        <Link to='/'> Home </Link>
                        <Link to='/polls'> Polls </Link>
                   
                        {!this.props.isLoggedIn ? (
                            <Link to='/login'> Log in </Link>
                        ) : (
                                <span>
                                    <Link to='/polls/newpoll'> Create a poll </Link>
                                    <Link to='/profile'> Profile </Link>
                                    <Link to='/logout' onClick={this.props.logout}> Log out </Link>
                                </span>
                            )}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar