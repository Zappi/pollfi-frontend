import React from 'react'
import pollService from '../services/polls'
import profileService from '../services/profile'

const ListedPollElement = (props) => {


    const editPoll = (id) => {
        console.log("POLL EDITED")
    }

    const profileId = () => {
        const foundProfile = profileService.getUserFromLocalStorage()

        if(foundProfile === null) {
            return null
        }

        return profileService.getUserFromLocalStorage().user.id
    }



    return (
        <div>
            {console.log(props)}

            <div className="listed-poll" onClick={props.onClick}>

                <h2> {props.data.question} </h2>
                <h4> Likes: {props.data.likes} </h4>

            </div>

            {profileId() === props.data.user._id &&

                <div>
                    <button onClick={() => props.clickRemovePoll(props.data.id)}> x </button>
                    <button onClick={() => editPoll(props.data.id)}> Edit </button>
                </div>
            }
        </div>
    )
}

export default ListedPollElement