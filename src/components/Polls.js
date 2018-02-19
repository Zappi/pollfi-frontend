import React from 'react'
import axios from 'axios'
import PollElement from './PollElement'
import pollService from '../services/polls'

class Polls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            polls: []
        }
    }

    async componentDidMount() {
        const polls = await pollService.getAll()
        this.setState({
            polls
        })
    }


    render() {
        return (
            <div>

                {this.state.polls.map(poll =>
                    <PollElement key={poll.id} data={poll} />
                )}

            </div>
        )
    }
}

export default Polls;