import React, { Component } from 'react'
import profileService from '../services/profile';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    async componentDidMount() {
        const user = await profileService.getProfile()
        this.setState({
            user: user.payload
        })
    }

    render() {
        console.log(this.state.user)
        console.log(this.state.user.polls)

        return (
            <div>
                <h4> Hello {this.state.user.name} </h4>

                <h5> You have created  polls </h5>
            </div>
        )
    }
}

export default Profile