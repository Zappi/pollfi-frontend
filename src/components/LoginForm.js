import React from 'react'
import loginService from '../services/login'
import pollService from '../services/polls'

class LoginForm extends React.Component {
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
      
            console.log(user)

            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            pollService.setToken(user.token)
   

        } catch (exception) {
            console.log("LOG IN FAILED, MAKE SOME NOTIFICATION HERE")
        }
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

            </div>
        )
    }
}

export default LoginForm