import { IAnalyser } from './IAnalyser';
import { IOutputTarget } from './IOutputTarget';
import { MatchData } from './MatchData';
import { HtmlReport } from './outputTargets/HtmlReport';
import { WinsAnalysis } from './analysers/WinsAnalysis';

export class Summary {
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport('report.html'));
  }

  constructor(public analyser: IAnalyser, public outputTarget: IOutputTarget) { }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}