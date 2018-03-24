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
        return (
            <div>
                <h4> Hello {this.state.user.name} </h4>
            </div>
        )
    }
}

export default Profile