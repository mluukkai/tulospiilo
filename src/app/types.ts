export type Game = {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameCenterLink: string;
  venue: {
    default: string;
  };
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: Array<{
    id: number;
    market: string;
    countryCode: string;
    network: string;
    sequenceNumber: number;
  }>;
  gameState: string;
  gameScheduleState: string;
  awayTeam: {
    id: number;
    name: {
      default: string;
      fr: string;
    };
    commonName: {
    default: string;
    };
    placeNameWithPreposition: {
      default: string;
      fr: string;
    };
    abbrev: string;
    score: number;
    logo: string;
  };
  homeTeam: {
    id: number;
    name: {
      default: string;
      fr: string;
    };
    commonName: {
      default: string;
    };
    placeNameWithPreposition: {
      default: string;
      fr: string;
    };
    abbrev: string;
    score: number;
    logo: string;
  };
  ticketsLink: string;
  ticketsLinkFr: string;
  period: number;
  periodDescriptor: {
    number: number;
    periodType: string;
    maxRegulationPeriods: number;
  };
  threeMinRecap: string;
};

export interface GameResult {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  venue: Venue;
  venueLocation: Venue;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  periodDescriptor: PeriodDescriptor;
  tvBroadcasts: TvBroadcast[];
  gameState: string;
  gameScheduleState: string;
  awayTeam: AwayTeam;
  homeTeam: AwayTeam;
  shootoutInUse: boolean;
  maxPeriods: number;
  regPeriods: number;
  otInUse: boolean;
  tiesInUse: boolean;
  summary: Summary;
  clock: Clock;
}
interface Clock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}
interface Summary {
  scoring: Scoring[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shootout: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  threeStars: any[];
  penalties: Penalty2[];
}
interface Penalty2 {
  periodDescriptor: PeriodDescriptor;
  penalties: Penalty[];
}
interface Penalty {
  timeInPeriod: string;
  type: string;
  duration: number;
  committedByPlayer: string;
  teamAbbrev: Venue;
  descKey: string;
}

interface Scoring {
  periodDescriptor: PeriodDescriptor;
  goals: Goal[];
}

interface Goal {
  situationCode: string;
  strength: string;
  playerId: number;
  firstName: FirstName;
  lastName: Venue;
  name: Venue;
  teamAbbrev: Venue;
  headshot: string;
  highlightClipSharingUrl: string;
  highlightClip: number;
  discreteClip: number;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  leadingTeamAbbrev?: Venue;
  timeInPeriod: string;
  goalModifier: string;
  assists: Assist[];
}
interface Assist {
  playerId: number;
  firstName: FirstName;
  lastName: Venue;
  name: Venue;
  assistsToDate: number;
}
interface FirstName {
  default: string;
  cs?: string;
  sk?: string;
}
interface AwayTeam {
  id: number;
  name: Venue;
  abbrev: string;
  placeName: Venue;
  placeNameWithPreposition: PlaceNameWithPreposition;
  score: number;
  sog: number;
  logo: string;
}
interface PlaceNameWithPreposition {
  default: string;
  fr: string;
}
interface TvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}
interface Venue {
  default: string;
}

export interface Period {
  periodDescriptor: PeriodDescriptor;
  goals: PeriodGoal[];
}

export interface PeriodGoal {
  situationCode: string;
  strength: string;
  playerId: number;
  firstName: FirstName;
  lastName: FirstName;
  name: FirstName;
  teamAbbrev: FirstName;
  headshot: string;
  highlightClipSharingUrl: string;
  highlightClip: number;
  discreteClip: number;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  leadingTeamAbbrev?: FirstName;
  timeInPeriod: string;
  goalModifier: string;
  assists: PeriodAssist[];
}
interface PeriodAssist {
  playerId: number;
  firstName: FirstName2;
  lastName: FirstName;
  name: FirstName;
  assistsToDate: number;
}
interface FirstName2 {
  default: string;
  cs?: string;
  sk?: string;
}
interface FirstName {
  default: string;
}
interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}