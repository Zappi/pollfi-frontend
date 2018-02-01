import React from 'react'
import axios from 'axios'

class Polls extends React.Component {
    render() {

        axios.get('http://localhost:3001/polls')
        .then(response => {
            const polls = response.data
            console.log(polls)
        })
        

        return (
            <div>
                <h2> Polls </h2>
            </div>
        )
    }
}

export default Polls;