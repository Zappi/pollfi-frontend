import React, { Component } from 'react'
import PollService from '../services/polls'

class PollElement extends Component {
    constructor() {
        super()

        this.state = {
            poll: []
        }
    }

    async componentDidMount() {
        await PollService.getSinglePoll(this.props.pollId).then(poll => this.setState({
            poll
        }))

    }

    render() {

        return (

            <div>
                <h2> {this.state.poll.question} </h2>
            </div >

        )
    }
}

export default PollElement