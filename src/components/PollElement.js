import React from 'react'
import pollService from '../services/polls'

const PollElement = ({ data, onClick }) => {

    const deletePoll = (id) => {
        pollService.remove(id)
    }

    return (
        <div onClick={onClick}>
            {console.log(data)}
            <div className="listed-poll">
                <h2> {data.question} </h2>
                <h4> Likes: {data.likes} </h4>
                <button onClick={() => deletePoll(data.id)}> x </button>
            </div>
        </div>
    )
}

export default PollElement