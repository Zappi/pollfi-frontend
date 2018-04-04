import React, {Component} from 'react'
import loginService from '../services/login'
import { Redirect } from 'react-router'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            fireRedirect: false
        }
    }

    login = async (e) => {
        e.preventDefault()

        try {

            const user = await loginService.login({
                username: e.target.username.value,
                password: e.target.password.value
            })

            console.log(user)

            window.localStorage.setItem('loggedUser', JSON.stringify(user))


            this.props.handleSubmit()
        } catch (exception) {
            console.log("LOG IN FAILED, MAKE SOME NOTIFICATION HERE")
        }
    
        this.setState({
            fireRedirect: true
        })



    }


    render() {

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


                {this.state.fireRedirect && (

                    <Redirect to='/profile' />

                )}
            </div>
        )
    }
}

export default LoginForm