import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../reducers/profileReducer'

class Profile extends Component {
    
    /*Fetches the profile information */
    async componentDidMount() {
        await this.props.fetchProfile()
    }

    render() {

        let userPolls = this.props.profile.polls
        
        if(userPolls===undefined) {
            userPolls = []
        }
        
        return (
            <div>
                <div className='profile-information'>
                    <h4> Hello {this.props.profile.username} </h4>

                    {userPolls.length > 0 ? (
                        <h5> You have created  polls </h5>
                    ) : (
                            <h5> You haven't created any polls yet :( </h5>
                        )}


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