import { Game, GameResult } from "../types"
import axios from "axios"
import { BASE_URL } from "../util"
import GamesScoreWrapper from "./GameScoreWrapper"

const urlOf = (id: number) => `${BASE_URL}/v1/gamecenter/${id}/landing`

const GamesOfTheDay = async ({ games, hide } : { games: Game[], hide: string }) => {
  const gameUrls = games.map((game) => urlOf(game.id))
  const requests = gameUrls.map((url) => axios.get(url))
  const responses = await Promise.all(requests)
  const results = responses.map((response) => response.data) as GameResult[]

  return (<GamesScoreWrapper results={results} hide={hide} />)
}

export default GamesOfTheDay