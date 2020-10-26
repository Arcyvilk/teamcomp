export type TPlayer = {
  allignment: 'ally' | 'enemy';
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  mastery: TMastery[];
};

export type TMastery = {
  championId: number;
  championLevel: 4 | 5 | 6 | 6;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  summonerId: string;
};
