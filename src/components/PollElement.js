import React, { Component } from 'react'
import PollService from '../services/polls'
import PollOption from './PollOption'

import Snackbar from 'material-ui/Snackbar'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

class PollElement extends Component {
    constructor() {
        super()

        this.state = {
            poll: [],
            dataFetched: false,
            snackbarMessage: '',
            openSnackbar: false,
            voted: false
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

        this.setState({
            openSnackbar: true,
            snackbarMessage: "You have voted " + upVotedOption[0].option,
            voted: true
        })
    }


    render() {
        const dataFetched = this.state.dataFetched

        const optionsWithoutId = []

        if (dataFetched) {
            const optionsWithId = this.state.poll.options.map((poll) => {
                optionsWithoutId.push({ option: poll.option, Upvotes: poll.upvotes })
            })
        }

        return (

            <div>
                <div className='singlePollQuestion'>
                    <h2> {this.state.poll.question} </h2>
                </div>

                <div className='listedPollOptions'>
                    {dataFetched && !this.state.voted ? (


                        this.state.poll.options.map((optionData) => {
                            { return <PollOption key={optionData._id} optionData={optionData} handleVote={() => this.handleVote(optionData)} /> }

                        })

                    ) : (
                            <div> </div>
                        )}

                </div>

                <div className='pollBarChart'>

                    {dataFetched && this.state.voted ? (

                        <BarChart width={730} height={250} data={optionsWithoutId}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="option" />
                            <YAxis dataKey="Upvotes" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Upvotes" fill="#8884d8" />
                        </BarChart>




                    ) : (
                            <div> </div>
                        )}


                </div>


                <div>
                    <Snackbar
                        open={this.state.openSnackbar}
                        message={this.state.snackbarMessage}
                        autoHideDuration={4000}
                    />
                </div>

            </div >

        )
    }
}

export default PollElement