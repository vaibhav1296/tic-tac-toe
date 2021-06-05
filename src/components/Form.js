import React, { Component } from "react"


class Form extends Component {
    state = {
        playerOne: '',
        playerTwo: '',
        isError: false,
        message: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = () => {
        if (this.state.playerOne === '' || this.state.playerTwo === '') {
            this.setState({
                isError: true,
                message: 'Please enter both players names.'
            })
        } else {
            this.props.handlePlayersData({
                one: this.state.playerOne,
                two: this.state.playerTwo
            })
        }
    }
    handleError = () => {
        this.setState({
            isError: false,
            message: ''
        })
    }
    render() {
        return (
            <div>
                <h5>Enter details to get started</h5>
                <div>{(this.state.isError) ? <div><span>{this.state.message}</span><span className="popup-cancel" onClick={this.handleError}>&#10060;</span></div> : ''}</div>
                <div>
                    <label>Enter player one: </label>
                    <input id="playerOne" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Enter player two: </label>
                    <input id="playerTwo" onChange={this.handleChange} />
                </div>
                <div onClick={this.handleClick} className="btn">
                    Get Started
                </div>
            </div>
        )
    }
}

export default Form