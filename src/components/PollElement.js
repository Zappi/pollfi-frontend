import React from 'react'

const PollElement = ({ data }) => {

   
    const clickFunction = (id) => {
        console.log(`clicked id ${id}`)
    }

    return (
        <div>
            {console.log(data)}
            <div className="listed-poll" onClick={() => clickFunction(data.id)}>
                <h2> {data.question} </h2>
                <h4> Likes: {data.likes} </h4>
            </div>
        </div>
    )
}

export default PollElement