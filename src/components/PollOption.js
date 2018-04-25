import React from 'react'

const PollOption = (props) => {


    return (
        <div className='pollOption'>
            <div>
                <a onClick={() => props.handleVote()} className="button is-primary is-outlined">Vote</a>
                <div className='pollOptionAndVotes'>
                    <h3 className='singlePollOption'> {props.optionData.option} </h3>
                    <p className='givenVotes'> Votes: {props.optionData.upvotes} </p>
                </div>
            </div>
        </div>
    )
}

export default PollOption