import React, { Component } from "react"


class PlayerCard extends Component {
    render() {
        return (
            <div className="playerCard">
                {this.props.activePlayer}
            </div>
        )
    }
}


export default PlayerCard