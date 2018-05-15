import React, { Component } from 'react'
import PollService from '../services/polls'
import PollOption from './PollOption'
import ProfileService from '../services/profile'

import { connect } from 'react-redux'
import { fetchSinglePoll, setSnackbarMessage, setPollVoted } from '../reducers/pollElementReducer'

import { Link } from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

class PollElement extends Component {
    constructor(props) {
        super(props)
        this.handleVote = this.handleVote.bind(this)
    }

    async componentDidMount() {
        await this.props.fetchSinglePoll(this.props.pollId)

    }

    async componentWillMount() {
        await this.props.fetchSinglePoll(this.props.pollId)
    }

    async handleVote(optionData) {
        const upVotedOption = this.props.pollElement.options.filter((value) => value._id === optionData._id)
        upVotedOption[0].upvotes++

        await PollService.vote(this.props.pollElement)

        /*Handles the reducer for voted poll */
        await this.props.setPollVoted()
        await this.props.setSnackbarMessage("You have voted " + upVotedOption[0].option)
    }


    render() {
        const optionsWithoutId = []

        if (this.props.dataFetched) {
            const optionsWithId = this.props.pollElement.options.map((poll) => {
                optionsWithoutId.push({ option: poll.option, Upvotes: poll.upvotes })
            })
        }

        let authenticated = false

        if (ProfileService.getUserFromLocalStorage() != null) {
            authenticated = true
        }

        return (

            <div>
                <div className='single-poll-question'>
                    <h2> {this.props.pollElement.question} </h2>
                </div>

                <div className='poll-vote-login-text'>
                    {authenticated ?
                        '' :
                        <Link to={'/login'} style={{ textDecoration: 'none', color: 'hsl(171, 100%, 41%)' }}>Log in to vote</Link>}
                </div>

                <div className='listedPollOptions'>
                    {this.props.dataFetched && !this.props.voted ? (


                        this.props.pollElement.options.map((optionData) => {
                            { return <PollOption key={optionData._id} authenticated={authenticated} optionData={optionData} handleVote={() => this.handleVote(optionData)} /> }

                        })

                    ) : (
                            <div> </div>
                        )}

                </div>

                <div className='pollBarChart container'>

                    {this.props.dataFetched && this.props.voted ? (

                        <BarChart width={730} height={250} data={optionsWithoutId}>
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
                        open={this.props.openSnackbar}
                        message={this.props.snackbarMessage}
                        autoHideDuration={4000}
                    />
                </div>
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return {
        pollElement: state.pollElement.poll,
        dataFetched: state.pollElement.dataFetched,
        snackbarMessage: state.pollElement.snackbarMessage,
        openSnackbar: state.pollElement.openSnackbar,
        voted: state.pollElement.voted
    }
}

const mapDispatchToProps = {
    fetchSinglePoll,
    setSnackbarMessage,
    setPollVoted
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PollElement);