//export const BASE_URL='http://localhost:3001' 
export const BASE_URL='https://api-web.nhle.com'

export const getCurrentCorretDate = () : string => {
  const now = new Date();
  if (now.getHours() < 22) {
    now.setDate(now.getDate() - 1);
  }
  
  //return "2024-09-28"
  return now.toISOString().split('T')[0];
}

export const getLimitDate = () => {
  const date = new Date(getCurrentCorretDate()) 
  date.setDate(date.getDate() + 1);
  return date 
}

export const teams = [
  {
    abr: 'NYR',
    logo: 'https://assets.nhle.com/logos/nhl/svg/NYR_light.svg',
    name: 'New York Rangers'
  },
  {
    abr: 'DAL',
    logo: 'https://assets.nhle.com/logos/nhl/svg/DAL_light.svg',
    name: 'Dallas Stars'
  },
  {
    abr: 'CAR',
    logo: 'https://assets.nhle.com/logos/nhl/svg/CAR_light.svg',
    name: 'Carolina Hurricanes'
  },
  {
    abr: 'WPG',
    logo: 'https://assets.nhle.com/logos/nhl/svg/WPG_light.svg',
    name: 'Winnipeg Jets'
  },
  {
    abr: 'FLA',
    logo: 'https://assets.nhle.com/logos/nhl/svg/FLA_light.svg',
    name: 'Florida Panthers'
  },
  {
    abr: 'VAN',
    logo: 'https://assets.nhle.com/logos/nhl/svg/VAN_light.svg',
    name: 'Vancouver Canucks'
  },
  {
    abr: 'BOS',
    logo: 'https://assets.nhle.com/logos/nhl/svg/BOS_20232024_light.svg',
    name: 'Boston Bruins'
  },
  {
    abr: 'COL',
    logo: 'https://assets.nhle.com/logos/nhl/svg/COL_light.svg',
    name: 'Colorado Avalanche'
  },
  {
    abr: 'EDM',
    logo: 'https://assets.nhle.com/logos/nhl/svg/EDM_light.svg',
    name: 'Edmonton Oilers'
  },
  {
    abr: 'TOR',
    logo: 'https://assets.nhle.com/logos/nhl/svg/TOR_light.svg',
    name: 'Toronto Maple Leafs'
  },
  {
    abr: 'NSH',
    logo: 'https://assets.nhle.com/logos/nhl/svg/NSH_light.svg',
    name: 'Nashville Predators'
  },
  {
    abr: 'LAK',
    logo: 'https://assets.nhle.com/logos/nhl/svg/LAK_20192020-20232024_light.svg',
    name: 'Los Angeles Kings'
  },
  {
    abr: 'TBL',
    logo: 'https://assets.nhle.com/logos/nhl/svg/TBL_light.svg',
    name: 'Tampa Bay Lightning'
  },
  {
    abr: 'VGK',
    logo: 'https://assets.nhle.com/logos/nhl/svg/VGK_light.svg',
    name: 'Vegas Golden Knights'
  },
  {
    abr: 'NYI',
    logo: 'https://assets.nhle.com/logos/nhl/svg/NYI_light.svg',
    name: 'New York Islanders'
  },
  {
    abr: 'STL',
    logo: 'https://assets.nhle.com/logos/nhl/svg/STL_light.svg',
    name: 'St. Louis Blues'
  },
  {
    abr: 'WSH',
    logo: 'https://assets.nhle.com/logos/nhl/svg/WSH_secondary_light.svg',
    name: 'Washington Capitals'
  },
  {
    abr: 'DET',
    logo: 'https://assets.nhle.com/logos/nhl/svg/DET_light.svg',
    name: 'Detroit Red Wings'
  },
  {
    abr: 'PIT',
    logo: 'https://assets.nhle.com/logos/nhl/svg/PIT_light.svg',
    name: 'Pittsburgh Penguins'
  },
  {
    abr: 'MIN',
    logo: 'https://assets.nhle.com/logos/nhl/svg/MIN_light.svg',
    name: 'Minnesota Wild'
  },
  {
    abr: 'PHI',
    logo: 'https://assets.nhle.com/logos/nhl/svg/PHI_light.svg',
    name: 'Philadelphia Flyers'
  },
  {
    abr: 'BUF',
    logo: 'https://assets.nhle.com/logos/nhl/svg/BUF_light.svg',
    name: 'Buffalo Sabres'
  },
  {
    abr: 'NJD',
    logo: 'https://assets.nhle.com/logos/nhl/svg/NJD_light.svg',
    name: 'New Jersey Devils'
  },
  {
    abr: 'CGY',
    logo: 'https://assets.nhle.com/logos/nhl/svg/CGY_light.svg',
    name: 'Calgary Flames'
  },
  {
    abr: 'SEA',
    logo: 'https://assets.nhle.com/logos/nhl/svg/SEA_light.svg',
    name: 'Seattle Kraken'
  },
  {
    abr: 'OTT',
    logo: 'https://assets.nhle.com/logos/nhl/svg/OTT_light.svg',
    name: 'Ottawa Senators'
  },
  {
    abr: 'UTA',
    logo: 'https://assets.nhle.com/logos/nhl/svg/UTA_light.svg',
    name: 'Utah Hockey Club'
  },
  {
    abr: 'MTL',
    logo: 'https://assets.nhle.com/logos/nhl/svg/MTL_light.svg',
    name: 'Montréal Canadiens'
  },
  {
    abr: 'CBJ',
    logo: 'https://assets.nhle.com/logos/nhl/svg/CBJ_light.svg',
    name: 'Columbus Blue Jackets'
  },
  {
    abr: 'ANA',
    logo: 'https://assets.nhle.com/logos/nhl/svg/ANA_20132014-20232024_light.svg',
    name: 'Anaheim Ducks'
  },
  {
    abr: 'CHI',
    logo: 'https://assets.nhle.com/logos/nhl/svg/CHI_light.svg',
    name: 'Chicago Blackhawks'
  },
  {
    abr: 'SJS',
    logo: 'https://assets.nhle.com/logos/nhl/svg/SJS_20082009-20232024_light.svg',
    name: 'San Jose Sharks'
  }
]
