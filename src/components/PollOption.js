import React from 'react'

const PollOption = (props) => {


    return (
        <div>
            <div>
                <h3> {props.optionData.option} </h3>
                <a onClick={() => props.handleVote()} className="button is-primary is-outlined">Vote</a>
                <p> Votes: {props.optionData.upvotes} </p>
            </div>
        </div>
    )
}

export default PollOption