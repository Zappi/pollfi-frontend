import React, { Component } from 'react'
import ListedPollCard from './ListedPollCard'
import { Redirect } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'

import { connect } from 'react-redux'
import { fetchPolls, removePoll, handlePollClick } from '../reducers/pollReducer'


class Polls extends Component {
    constructor(props) {
        super(props)
        this.removePoll = this.removePoll.bind(this)
    }
    /*Fetches polls with reducer */
    async componentDidMount() {
        await this.props.fetchPolls()

    }

    handleClick(pollId) {
        this.props.handlePollClick(pollId)
    }

    async removePoll(poll) {
        await this.props.removePoll(poll)
    }

    /*Lists all the polls in path /polls as ListedPollCard which are created by using material-ui cards*/
    render() {
        return (
            <div>
                <div>
                    {this.props.polls.map(poll =>
                        <ListedPollCard key={poll.id} data={poll} clickRemovePoll={() => this.removePoll(poll)} clickToOpen={() => this.handleClick(poll.id)} />
                    )}
                </div>


                {this.props.fireRedirect && (
                    <Redirect to={`/polls/poll/${this.props.pollId}`} />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        polls: state.polls.polls,
        fireRedirect: state.polls.fireRedirect,
        pollId: state.polls.pollId,
        currentPageNumber: state.polls.currentPageNumber
    }
}

const mapDispatchToProps = {
    fetchPolls,
    removePoll,
    handlePollClick
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Polls);