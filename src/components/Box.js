import React, { Component } from "react"

class Box extends Component {
    render() {
        // const valueInBox = (this.props.indexString === this.props.activeIndex) ? this.props.currentValue : "N"
        const i = Number(this.props.indexString.split("")[0])
        const j = Number(this.props.indexString.split("")[1])
        const valueInBox = this.props.dashboard[i][j]
        console.log('valueInBox', valueInBox)
        return (
            <div className="grid-item" onClick={() => this.props.updateDashboard(this.props.indexString)}>
                <span className={(valueInBox !== 'O' && valueInBox !== "X") ? "remove" : ''}>{valueInBox}</span>
            </div>
        )
    }
}

export default Box;