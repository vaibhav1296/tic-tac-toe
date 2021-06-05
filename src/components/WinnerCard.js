import React, { Component } from "react"


class WinnerCard extends Component {
    render() {
        return (
            <div>
                <div className="winnerCard">
                    {this.props.winner} has won the match.
                </div>
                <div className="winner-btn" onClick={this.props.restartGame}>Restart</div>
            </div>

        )
    }
}

export default WinnerCard