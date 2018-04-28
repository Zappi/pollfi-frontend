import React, { Component } from 'react'
import UserService from '../services/user'
import loginService from '../services/login'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Redirect } from 'react-router'


class RegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            alertWarning: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleAlertWarningClose = () => {
        this.setState({
            alertWarning: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const realPassword = this.state.password

        UserService
            .register(this.state)
            .then(user => {
                this.loginNewUser(user.data, realPassword)
            })
            .catch(error => {
                this.setState({
                    alertWarning: true,
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    fireRedirect: false
                })
            })
    }

    loginNewUser = async (newUser, realPassword) => {
        const user = await loginService.login({
            username: newUser.username,
            password: realPassword
        })

        await window.localStorage.setItem('loggedUser', JSON.stringify(user))
        await this.props.handleSubmit()
        
        this.setState({
            fireRedirect: true
        })

    }


    render() {

        const alertWarningAction = [
            <FlatButton
                label='Back'
                primary={true}
                onClick={this.handleAlertWarningClose}
            />
        ]

        return (
            <div className='control is-two-thirds'>
                <form onSubmit={this.handleSubmit}>
                    <h2> Create new user </h2>

                    <div className='field'>
                        <h5> Username </h5>
                        <input
                            className='input is-primary'
                            type='text'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleUsername}
                        />
                    </div>

                    <div className='field'>
                        <h5> Name </h5>
                        <input
                            className='input is-primary'
                            type='text'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleName}
                        />
                    </div>

                    <div className='field'>
                        <h5> Password </h5>
                        <input
                            className='input is-primary'
                            type='password'
                            placeholder='Password (must contain letters and numbers)'
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />
                    </div>


                    <div className='field'>
                        <h5> Email </h5>
                        <input
                            className='input is-primary'
                            type='text'
                            placeholder='Email address'
                            value={this.state.email}
                            onChange={this.handleEmail}
                        />
                    </div>

                    <button className='button is-primary'> Create new user! </button>
                </form>


                <Dialog
                    actions={alertWarningAction}
                    modal={false}
                    open={this.state.alertWarning}
                    onRequestClose={this.handleAlertWarningClose}
                >
                    Username or email is already taken.
                </Dialog>


                {this.state.fireRedirect && (

                    <Redirect to='/profile' />

                )}
            </div>
        )
    }
}

export default RegisterForm