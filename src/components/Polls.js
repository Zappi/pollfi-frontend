import React, { Component } from 'react'
import ListedPollCard from './ListedPollCard'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchPolls, removePoll } from '../reducers/pollReducer'

class Polls extends Component {
    constructor(props) {
        super(props)

        /*Todo remove state and move to reducer */
        this.state = {
            fireRedirect: false,
            pollId: ''
        }
        this.removePoll = this.removePoll.bind(this)
    }

    /*Fetches polls with reducer */
    async componentDidMount() {
       await this.props.fetchPolls()

    }

    handleClick(id) {
        this.setState({
            fireRedirect: true,
            pollId: id
        })
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


                {this.state.fireRedirect && (
                    <Redirect to={`/polls/poll/${this.state.pollId}`} />
                )}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        polls: state.polls
    }
}

const mapDispatchToProps = {
    fetchPolls,
    removePoll
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Polls);