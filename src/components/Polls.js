import React from 'react'
import axios from 'axios'
import PollElement from './PollElement'
import pollService from '../services/polls'
import { Redirect } from 'react-router'

class Polls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            polls: [],
            fireRedirect: false,
            pollId: ''
        }
    }



    async componentDidMount() {
        const polls = await pollService.getAll()
        this.setState({
            polls
        })
    }

    handleClick(id) {
        this.setState({
            fireRedirect: true,
            pollId: id
        })
    }


    render() {
        return (
            <div>
                {this.state.polls.map(poll =>
                    <PollElement key={poll.id} data={poll} onClick={() => this.handleClick(poll.id)} />
                )}

                {this.state.fireRedirect && (
                    <Redirect to={`/polls/${this.state.pollId}`} />
                )}

            </div>
        )
    }
}

export default Polls;