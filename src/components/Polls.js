import React, {Component} from 'react'
import ListedPollElement from './ListedPollElement'
import pollService from '../services/polls'
import { Redirect } from 'react-router-dom'

class Polls extends Component {
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
                    <ListedPollElement key={poll.id} data={poll} onClick={() => this.handleClick(poll.id)} />
                )}

                {this.state.fireRedirect && (
                    <Redirect to={`/polls/poll/${this.state.pollId}`} />
                )}

            </div>
        )
    }
}

export default Polls;