"use client";
import { useState } from "react";
import GameScore from "./GameScore";
import { GameResult } from "../types";


const GamesScoreWrapper = ({ results, hide } : { results: GameResult[], hide: string }) => {
  const [details, setDetails] = useState(-1)

  return (
    <>
      <div>
        {results.map((game) => (
          <div key={game.id} className="m-5">
            <GameScore game={game} hide={hide} details={details} setDetails={setDetails} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GamesScoreWrapper