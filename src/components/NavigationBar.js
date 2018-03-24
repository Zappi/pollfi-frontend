import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class NavigationBar extends React.Component {

    render() {
        const alignRight = {
            textAlign: 'right',
            display: 'inline',
            marginLeft: '50%'
        }

        const alignLeft = {
            textAlign: 'left',
            display: 'inline-block'
        }

        const inlineBlock = {
            display: 'inline'
        }

        return (
            <nav className='nav-bar'>
                <div style={inlineBlock}>
                    <div style={alignLeft}>
                        <Link to='/'> Home </Link>
                        <Link to='/polls'> Polls </Link>
                        <Link to='/polls/newpoll'> Create a poll </Link>
                    </div>

                    <div style={alignRight}>
                        {!this.props.isLoggedIn ? (
                            <Link to='/login'> Log in </Link>
                        ) : (
                                <div className='keepAtSameRow'>
                                    <Link to='/profile'> Profile </Link>
                                    <Link to='/logout' onClick={this.props.logout}> Log out </Link>
                                </div>
                            )}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar