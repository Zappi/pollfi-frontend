import React from 'react'

class PollForm extends React.Component {
    constructor() {
        super()
        this.state = {
            questionName: '',
            name: '',
            shareholders: [{ name: '' }]
        }
    }

    handleQuestionName = (e) => {
        this.setState({
            questionName: e.target.value
        })
    }

    handleShareholderName = (idx) => (e) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: e.target.value }
        });

        this.setState({ shareholders: newShareholders })
    }

    addShareHolder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: '' }])
        })
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
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
                            placeholder={`Add queston`}
                            value={this.state.questionName}
                            onChange={this.handleQuestionName}
                        />
                    </div>


                    {this.state.shareholders.map((shareholder, idx) => (
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
            </div>
        )
    }
}

export default PollForm