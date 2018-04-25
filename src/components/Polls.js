import React, { Component } from 'react'
import ListedPollCard from './ListedPollCard'
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
        this.removePoll = this.removePoll.bind(this)
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

    async removePoll(id) {
        await pollService.remove(id)
        this.setState({
            polls: this.state.polls.filter(poll => poll.id !== id)
        })


    }

    /*Lists all the polls in path /polls as ListedPollCard which are created by using material-ui cards*/
    render() {
        return (
            <div>
                <div>
                    {this.state.polls.map(poll =>
                        <ListedPollCard key={poll.id} data={poll} clickRemovePoll={() => this.removePoll(poll.id)} clickToOpen={() => this.handleClick(poll.id)} />
                    )}
                </div>


                {this.state.fireRedirect && (
                    <Redirect to={`/polls/poll/${this.state.pollId}`} />
                )}

            </div>
        )
    }
}

export default Polls;