import axios from "axios"
import Link from 'next/link'

import GamesOfDate from "@/app/components/GamesOfDate"
import { BASE_URL, getCurrentCorretDate, getLimitDate } from "@/app/util"

export default async function Page({ params: { team, date } }: { params: { team: string, date: string } }) {
  const url =  `${BASE_URL}/v1/scoreboard/now`

  const { data } = await axios.get(url)
  const { gamesByDate } = data

  const currentDate = new Date();
  const dates = gamesByDate
    .map((game: { date: string }) => game.date)
    .filter((d: string) => new Date(d) <= getLimitDate());

  const possibleDate = dates.includes(date) ? date : getCurrentCorretDate()

  const selectedDate = dates.includes(possibleDate) ? possibleDate : dates[0]

  const gamesOfTheDay = gamesByDate.find((game: { date: string }) => game.date === selectedDate).games

  return (
    <div className="m-5">
      <div className="mb-10">
        {dates.map((d: string) => (
          <Link key={date} href={`/${team}/${d}`} className={d === date ? 'p-4 font-bold' : 'p-4'}>
            {d}
          </Link>
        ))}
      </div>

      <GamesOfDate games={gamesOfTheDay} hide={team.toLowerCase()} />
    </div>
  )
}
