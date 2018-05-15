import React from 'react'

const PollOption = (props) => {

    return (
        <div className='pollOption'>
            <div>
                {props.authenticated ? (
                    <div className='polloption-and-votes'>
                        <a onClick={() => props.handleVote()} className="button is-primary is-outlined">Vote</a>
                        <h3 className='single-poll-option'> {props.optionData.option} </h3>
                        <p className='given-votes'> Votes: {props.optionData.upvotes} </p>
                    </div>
                ) : (
                        <div className='polloption-and-votes-not-authenticated'>
                            <h3 className='single-poll-option-not-authenticated'> {props.optionData.option} </h3>
                            <p className='given-votes-not-authenticated'> Votes: {props.optionData.upvotes} </p>
                        </div>
                    )}

            </div>
        </div>

    )
}

export default PollOption