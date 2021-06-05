import React from "react"

const Func = () => {
    return (
        <div>
            <div className="playerCardRow">
                <PlayerCard activePlayer={this.state.activePlayer} />
            </div>
            <div className="tossBar">{(this.state.isToss) ? '' : <Toss handleToss={this.handleToss} />}</div>
            <div className="gameBoard">
                {(!this.state.isToss) ? '' : this.state.index.map(value => {
                    return <Box indexString={value} onclick={this.updateDashboard} />
                })}
            </div>

            <h1>Hi i am vaibhav sharma</h1>
        </div>
    )
}