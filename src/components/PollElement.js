import React, { Component } from 'react'
import PollService from '../services/polls'
import PollOption from './PollOption'

import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

class PollElement extends Component {
    constructor() {
        super()

        this.state = {
            poll: [],
            dataFetched: false,
            snackbarMessage: null,
            openSnackbar: false
        }

        this.handleVote = this.handleVote.bind(this)
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

    async handleVote(optionData) {
        const upVotedOption = this.state.poll.options.filter((value) => value._id === optionData._id)
        upVotedOption[0].upvotes++
        await PollService.vote(this.state.poll)

     
        console.log(upVotedOption[0])
        this.setState({
            openSnackbar: true,
            snackbarMessage: "You have voted " + upVotedOption[0].option,
        })
    }


    render() {

        const dataFetched = this.state.dataFetched

        console.log(this.state.poll)

        return (

            <div>
                <div className='singlePollQuestion'>
                    <h2> {this.state.poll.question} </h2>
                </div>
                {dataFetched ? (

                    this.state.poll.options.map((optionData) => {
                        { return <PollOption key={optionData._id} optionData={optionData} handleVote={() => this.handleVote(optionData)} /> }

                    })


                ) : (
                        /*Fix this with animation*/
                        <h2> Loading... </h2>
                    )}

                <div>
                    <Snackbar
                        open={this.state.openSnackbar}
                        message={this.state.snackbarMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.cancelVote}
                    />
                </div>

            </div>

        )
    }
}

export default PollElement