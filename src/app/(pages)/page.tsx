import Image from 'next/image'
import Link from 'next/link'
import { teams } from '../util'

const Home = async () => {
  const orderByName = (a: { name: string }, b: { name: string }) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }

  return (
    <div className="m-5">
      <h2 className="text-4xl font-extrabold dark:text-white mb-5">Tulospiilo</h2>
      <div className="mt-5 mb-5">Klikkaa joukkuetta, jonka tulokset haluat piilottaa, bookmarkkaa avautuva sivu</div>
      <div>
        {teams.sort(orderByName).map((team) => (
          <Link href={`${team.abr.toLowerCase()}`} key={team.abr}>   
            <div className="flex flex-row mb-3">
              <Image
                src={team.logo}
                alt={team.name}
                width={50}
                height={50}
              />
              <div className="ml-3">
    
                  {team.name}
                
                
              </div>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home