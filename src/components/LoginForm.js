import React, { Component } from 'react'
import loginService from '../services/login'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { fireRedirect, showDialogWarning, hideDialogWarning } from '../reducers/loginReducer'

class LoginForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    }
    constructor() {
        super()
    }

    login = async (e) => {
        e.preventDefault()

        try {

            const user = await loginService.login({
                username: e.target.username.value,
                password: e.target.password.value
            })

            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            this.props.handleSubmit()

        } catch (exception) {
            await this.props.showDialogWarning()
        }

        if (!this.props.failedLoginWarning) {
            this.props.fireRedirect()
        }
    }


    render() {

        const alertWarningAction = [
            <FlatButton
                label='Back'
                primary={true}
                onClick={this.props.hideDialogWarning}
            />
        ]

        return (
            <div>
                <h2> Log in </h2>
                <form onSubmit={this.login}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" name="username" type="username" placeholder="Username" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" name="password" type="password" placeholder="Password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control">
                            <button className="button is-success">
                                Login
                            </button>
                        </p>
                    </div>

                </form>


                <Dialog
                    actions={alertWarningAction}
                    modal={false}
                    open={this.props.failedLoginWarning}
                    onRequestClose={this.props.hideDialogWarning}
                >
                    Wrong username or password
                </Dialog>

                <div>
                    {this.props.checkIfRedirected && (

                        <Redirect to='/profile' />

                    )}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        checkIfRedirected: state.login.fireRedirect,
        failedLoginWarning: state.login.failedLoginWarning
    }
}

const mapDispatchToProps = {
    fireRedirect,
    showDialogWarning,
    hideDialogWarning
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)