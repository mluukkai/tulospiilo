"use client";
import { useState } from "react";
import { GameResult, Period, PeriodGoal } from "../types";

const PeriodView = ({ period } : { period: Period }) => {
  console.log(period)

  const getAssist = (goal: PeriodGoal) => {
    if (goal.assists.length === 0) {
      return ''
    }

    const assists = goal.assists.map((assist) => assist.name.default).join(', ')

    return "(" + assists + ")"
  }

  return (
    <div className="mt-5">
      <div className="text-lg">
        Period {period.periodDescriptor.number} {period.periodDescriptor.periodType === 'REG' ? '' : period.periodDescriptor.periodType}
      </div>
      <div>
        {period.goals.map((goal) => (
          <div key={goal.timeInPeriod} className="flex flex-row">
            <div className="flex-none w-14">{goal.timeInPeriod}</div>
            <div className="flex-none w-64">{goal.lastName.default} {goal.firstName.default} {getAssist(goal)}</div>
            <div className="flex-none w-14">{goal.teamAbbrev.default}</div>
            <div className="flex-none w-14">{goal.awayScore} - {goal.homeScore}</div> 
          </div>
        ))}
      </div>


    </div>
  )
}

const Details = ({ game } : { game: GameResult}) => {  
  return (
    <div>    
      <div>shots on goal</div>  
      <div>{game.awayTeam.sog} - {game.homeTeam.sog}</div>

      { game.summary.scoring.map((period) => <PeriodView key={period.periodDescriptor.number} period={period} />)}
    </div>
  )
}

const Game = ({ game, hide } : { game: GameResult, hide: string}) => {
  const [visible, setVisible] = useState(false)

  const home = game.homeTeam.abbrev
  const away = game.awayTeam.abbrev
  const hideResult = hide.toLowerCase() === home.toLowerCase() || hide === away.toLowerCase()

  if (hideResult) {
    return null
  } 

  return (
    <div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={() => setVisible(!visible)}
        >
          {away} at {home} {game.awayTeam.score} - {game.homeTeam.score}
        </button>
      </div>
      
      {visible && <Details game={game} />}
    </div>
  )

}

export default Game