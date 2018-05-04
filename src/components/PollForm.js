import React, { Component } from 'react'
import { Redirect } from 'react-router'
import pollService from '../services/polls'
import Snackbar from 'material-ui/Snackbar'

class PollForm extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            option: '',
            options: [{ option: '', upvotes: 0 }],
            fireRedirect: false,
            openSnackBar: false
        }
    }

    validatePoll = () => {
        if (this.state.question.length === 0 || this.state.question.length > 70) {
            return false
        }

        let invalidOptions = []
        this.state.options.map((option) => {
            if (option.option.length === 0 || option.option.length > 70) {
                invalidOptions.push(false)
            }
        })

        if (invalidOptions.length > 0) {
            return false
        }

        return true
    }

    handleQuestionName = (e) => {
        this.setState({
            question: e.target.value
        })
    }

    handleShareholderName = (idx) => (e) => {
        const newOption = this.state.options.map((option, sidx) => {
            if (idx !== sidx) return option;
            return { ...option, option: e.target.value }
        });

        this.setState({ options: newOption })
    }

    addShareHolder = () => {
        this.setState({
            options: this.state.options.concat([{ option: '', upvotes: 0 }])
        })
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({
            options: this.state.options.filter((s, sidx) => idx !== sidx)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.validatePoll()) {
            console.log(this.validatePoll())
            pollService.create(this.state).then(res =>
                this.setState({ fireRedirect: true }))
        } else {
            this.setState({
                openSnackBar: true
            })
        }
    }

    render() {
        return (
            <div className='control is-two-thirds'>
                <form onSubmit={this.handleSubmit} className='poll-form'>
                    <h2> Create New Poll </h2>

                    <div className='field'>
                        <h5> Question </h5>
                        <input
                            className='input is-primary'
                            type='text'
                            placeholder={`Add question (max. 70 characters)`}
                            value={this.state.questionName}
                            onChange={this.handleQuestionName}
                        />
                    </div>

                    <h5> Options </h5>
                    {this.state.options.map((shareholder, idx) => (
                        <div key={idx}>
                            <div className='shareholder option-input'>
                                <div className='option-input-text'>

                                    <input
                                        className='input is-primary option-input-text'
                                        type='text'
                                        placeholder={`Add option (max. 70 characters)`}
                                        value={shareholder.name}
                                        onChange={this.handleShareholderName(idx)}
                                    />
                                </div>
                                <button className='button is-danger option-delete-button' type="button" onClick={this.handleRemoveShareholder(idx)}>x</button>
                            </div>

                        </div>
                    ))}

                    {this.state.options.length < 5 ? (
                        <button type='button' onClick={this.addShareHolder} className='button is-info add-new-poll-button'>
                            Add new option!
                    </button>
                    ) : (
                            <button type='button' onClick={this.addShareHolder} className='button is-info' disabled>
                                Add new option!
                    </button>
                        )}

                    {this.state.options.length > 1 ? (
                        <button className='button is-primary'> Save! </button>
                    ) : (
                            <button className='button is-primary' disabled> Save! </button>
                        )}

                </form>

                <div>
                    <Snackbar
                        open={this.state.openSnackBar}
                        message={`Field can't be empty or over 70 characters long`}
                        autoHideDuration={4000}
                    />
                </div>

                {this.state.fireRedirect && (
                    <Redirect to={'/polls'} />
                )}
            </div>
        )
    }
}

export default PollForm