"use client";
import { useState } from "react";
import Image from 'next/image'
import { GameResult, Period, PeriodGoal } from "../types";

const PeriodView = ({ period, game } : { period: Period, game: GameResult }) => {
  
  if (period.goals.length === 0) {
    return (
      <div className="mt-5">
        <div className="text-lg">
          Period {period.periodDescriptor.number} {period.periodDescriptor.periodType === 'REG' ? '' : period.periodDescriptor.periodType}
        </div>
        No goals scored
      </div>
    )
  }

  const logos = {
    [game.homeTeam.abbrev]: game.homeTeam.logo,
    [game.awayTeam.abbrev]: game.awayTeam.logo,
  }

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
            <div className="flex-none w-14">
              {goal.timeInPeriod}
            </div>
            <Image
              className="flex-none w-8"
              src={logos[goal.teamAbbrev.default]}
              alt={goal.teamAbbrev.default}
              width={30}
              height={30}
            />
            <div className="flex-none w-96">
              {goal.lastName.default} {goal.firstName.default} {getAssist(goal)}
            </div>
            <div className="flex-none w-14 ml-5">
              {goal.awayScore} - {goal.homeScore}
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

const Details = ({ game } : { game: GameResult }) => {  
  return (
    <div className="mb-10">    
      <div>shots on goal:  {game.awayTeam.sog} - {game.homeTeam.sog}</div>

      {game.summary.scoring.map((period) =>
        <PeriodView key={period.periodDescriptor.number} period={period} game={game}/>
      )}
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

  const gameNotStarted = !game.awayTeam.score && !game.homeTeam.score

  const startTimeInFinnishTime = new Date(game.startTimeUTC).toLocaleString("fi-FI", {
    timeZone: "Europe/Helsinki",
    hour: "2-digit",
  });

  console.log(startTimeInFinnishTime)

  return (
    <div onClick={() => !gameNotStarted && setVisible(!visible)}>
      <div className="flex flex-row mb-5">
        <Image
          className="flex-none"
          src={game.awayTeam.logo}
          alt={game.awayTeam.abbrev}
          width={50}
          height={50}
        />
        
        <div className="flex-none w-24">
          {away} at {home}
        </div>
        
        <Image
          className="flex-none"
          src={game.homeTeam.logo}
          alt={game.homeTeam.abbrev}
          width={50}
          height={50}
        />

        <div className="flex-none w-24 ml-3">
          {gameNotStarted ? <>alkaa klo {startTimeInFinnishTime}</> : <>{game.awayTeam.score} - {game.homeTeam.score}</>}
        </div>
      </div>
      
      {visible && <Details game={game} />}
    </div>
  )

}

export default Game