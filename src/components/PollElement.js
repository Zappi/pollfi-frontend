import React, { Component } from 'react'
import PollService from '../services/polls'

import PollOption from './PollOption'

class PollElement extends Component {
    constructor() {
        super()

        this.state = {
            poll: [],
            dataFetched: false
        }
    }

    async componentDidMount() {
        await PollService.getSinglePoll(this.props.pollId).then(poll => this.setState({
            poll
        }))

        this.setState({ dataFetched: true })
    }

    async componentWillMount() {
        await PollService.getSinglePoll(this.props.pollId).then(poll => this.setState({
            poll
        }))
    }

    render() {

        const dataFetched = this.state.dataFetched

        console.log(this.state.poll)

        return (

            <div>

                <h2> {this.state.poll.question} </h2>
                
                {dataFetched ? (

                    this.state.poll.options.map((optionData) => {
                        { return <PollOption key={optionData._id} optionData={optionData} /> }

                    })


                ) : (
                        <h2> Loading... </h2>
                    )}

            </div>

        )
    }
}

export default PollElement