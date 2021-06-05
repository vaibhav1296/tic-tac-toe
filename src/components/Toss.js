import React, { Component } from "react"

class Toss extends Component {
    render() {
        return (
            <div className="toss" onClick={this.props.handleToss}>
                <h3>Click me!</h3>
            </div>
        )
    }
}

export default Toss