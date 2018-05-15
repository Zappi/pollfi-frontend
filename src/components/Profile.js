import React, { Component } from 'react'
import profileService from '../services/profile';

import { connect } from 'react-redux'
import { fetchProfile } from '../reducers/profileReducer'

class Profile extends Component {
    constructor(props) {
        super(props)

    }

    /*Fetches the profile information */
    async componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
        return (
            <div>
                <div className='profile-information'>
                    <h4> Hello {this.props.profile.username} </h4>
                    <h5> You have created  polls </h5>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = {
    fetchProfile
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);