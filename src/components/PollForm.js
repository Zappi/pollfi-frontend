import React from 'react'
import { Redirect } from 'react-router'
import pollService from '../services/polls'

class PollForm extends React.Component {
    constructor() {
        super()
        this.state = {
            question: '',
            option: '',
            options: [{ option: '', upvotes: 0}],
            fireRedirect: false
        }
    }

    handleQuestionName = (e) => {
        this.setState({
            question: e.target.value
        })
        console.log(this.state)
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
            options: this.state.options.concat([{ option: '', upvotes: 0}])
        })
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({
            options: this.state.options.filter((s, sidx) => idx !== sidx)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        pollService.create(this.state)
        this.setState({fireRedirect: true})

    }

    render() {
        return (
            <div className='control is-two-thirds'>
                <form onSubmit={this.handleSubmit}>
                    <h2> Create New Poll </h2>
                    <div className='field'>
                        <input
                            className='input is-primary'
                            type='text'
                            placeholder={`Add question`}
                            value={this.state.questionName}
                            onChange={this.handleQuestionName}
                        />
                    </div>


                    {this.state.options.map((shareholder, idx) => (
                        <div  key={idx} className='field'>
                            <div className='shareholder'>
                                <input
                                    className='input is-primary'
                                    type='text'
                                    placeholder={`Add option`}
                                    value={shareholder.name}
                                    onChange={this.handleShareholderName(idx)}
                                />
                            </div>
                            <button className='button is-danger' type="button" onClick={this.handleRemoveShareholder(idx)}>x</button>
                        </div>
                    ))}

                    <button type='button' onClick={this.addShareHolder} className='button is-info'>
                        Add new option!
                    </button>

                    <button className='button is-primary'> Save! </button>

                </form>
                {this.state.fireRedirect && (
                    <Redirect to={'/polls'} />
                )}
            </div>
        )
    }
}

export default PollForm