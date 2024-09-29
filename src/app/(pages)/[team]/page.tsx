import axios from "axios"
import GamesOfDate from "../../components/GamesOfDate"
import { BASE_URL } from "../../util"

export default async function Page({ params: { team } }: { params: { team: string } }) {
  const url =  `${BASE_URL}/v1/scoreboard/now`

  const { data } = await axios.get(url)
  const { focusedDate, gamesByDate } = data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dates = gamesByDate.map((game: any) => game.date)
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gamesOfTheDay = gamesByDate.find((game: any) => game.date === focusedDate).games

  console.log(team.toLowerCase())

  return (
    <div className="m-5">
      <GamesOfDate
        games={gamesOfTheDay} hide={team.toLowerCase()}
      />

      {false && dates.map((date: string) => (
        <span className="p-4" key={date}>
          {date}
        </span>
      ))}
    </div>
  )
}
