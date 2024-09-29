import { Game, GameResult } from "../types"
import axios from "axios"
import { BASE_URL } from "../util"
import GameScore from "./GameScore"

const urlOf = (id: number) => `${BASE_URL}/v1/gamecenter/${id}/landing`

const GamesOfTheDay = async ({ games, hide } : { games: Game[], hide: string }) => {
  const gameUrls = games.map((game) => urlOf(game.id))
  const requests = gameUrls.map((url) => axios.get(url))
  const responses = await Promise.all(requests)
  const results = responses.map((response) => response.data) as GameResult[]

  return (
    <>
      <div>
        {results.map((game) => (
          <div key={game.id} className="m-5">
            <GameScore game={game} hide={hide} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GamesOfTheDay