import { MatchData } from './MatchData';

export interface IAnalyser {
  run(matches: MatchData[]): string;
}