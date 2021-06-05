import React, { Component } from "react"
import PlayerCard from './components/PlayerCard'
import './App.css';
import Box from './components/Box'
import Toss from "./components/Toss";
import Form from './components/Form'
import WinnerCard from './components/WinnerCard'
import { checkResult, checkTermination } from './helper/helper'


class App extends Component {
  state = {
    dashboard: [[11, 12, 13], [14, 15, 16], [17, 18, 19]],
    activePlayer: '',
    players: {
      one: '',
      two: ''
    },
    activeIndex: '',
    currentValue: 'N',
    winner: '',
    isToss: false,
    activePlayer: '',
    index: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    dataStored: false
  }

  handleToss = () => {
    const player = Math.floor(Math.random() * 2) + 1
    const activePlayer = (player === 1) ? 'one' : 'two'
    this.setState({
      activePlayer,
      isToss: true
    }, () => {
      console.log(this.state)
    })

  }
  handlePlayersData = (playersData) => {
    const players = {
      one: playersData.one,
      two: playersData.two
    }
    console.log('set name called')
    this.setState({
      dataStored: true,
      players
    }, () => {
      Object.entries(this.state.players).map(([id, playerName]) => {
        console.log(id)
        console.log(playerName)
      })
    })
  }
  updateDashboard = (indexString) => {
    // do something
    const i = Number(indexString.split('')[0])
    const j = Number(indexString.split('')[1])
    const currentValue = (this.state.activePlayer === "one" ? 'O' : 'X')
    let dashboard = [...this.state.dashboard]
    dashboard[i][j] = currentValue
    const checkIfCurrentPlayerWins = checkResult(dashboard)
    const checkToTerminate = checkTermination(dashboard)
    if (checkIfCurrentPlayerWins) {
      this.setState({
        dashboard,
        winner: this.state.activePlayer
      })
    } else if (checkToTerminate) {
      this.setState({
        dashboard,
        winner: "none"
      })
    } else {
      let activePlayer
      if (this.state.activePlayer === "one") {
        activePlayer = "two"
      } else {
        activePlayer = "one"
      }
      this.setState({
        dashboard,
        activePlayer,
        currentValue,
        activeIndex: indexString

      })
    }

  }

  restartGame = () => {
    this.setState({
      dashboard: [[11, 12, 13], [14, 15, 16], [17, 18, 19]],
      activePlayer: '',
      activeIndex: '',
      currentValue: 'N',
      winner: '',
      isToss: false,
      activePlayer: '',
      index: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    })
  }
  render() {
    const dashboardAsProp = JSON.parse(JSON.stringify(this.state.dashboard))
    return (
      <div>
        {!this.state.dataStored ? <Form handlePlayersData={this.handlePlayersData} /> :
          <div>
            <nav className="nav">
              {Object.entries(this.state.players).map(([id, playerName]) => {
                return (
                  <div className={"playerCard " + (this.state.activePlayer === id ? 'active' : 'non-active')}>{playerName}</div>
                )
              })}
            </nav>
            <div>
              {!this.state.isToss ? <Toss handleToss={this.handleToss} /> :
                <div className="container">
                  {this.state.winner === '' ?
                    <div className="grid">
                      {this.state.index.map(value => {
                        return (

                          <Box indexString={value} dashboard={dashboardAsProp} activeIndex={this.state.activeIndex} currentValue={this.state.currentValue} updateDashboard={this.updateDashboard} />

                        )
                      })}
                    </div> : this.state.winner === 'none' ? <WinnerCard winner="none" restartGame={this.restartGame} /> : <WinnerCard winner={this.state.players[this.state.winner]} restartGame={this.restartGame} />}
                </div>
              }
            </div>
          </div>}
      </div>
    )
  }
}

export default App

