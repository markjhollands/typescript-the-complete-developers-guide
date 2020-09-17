import { ConsoleReport } from './outputTargets/ConsoleReport';
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { Summary } from './Summary';
import { MatchReader } from './MatchReader';

// Below uses a static method to construct a MatchReader using a CsvFileReader
// given a CSV filename. This could also be done by instantiating a CsvFileReader
// object (passing the filename) and creating a new MatchReader object (passing
// the instance of CsvFileReader).
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const consoleSummary = new Summary(new WinsAnalysis('Southampton'), new ConsoleReport());
consoleSummary.buildAndPrintReport(matchReader.matches);

// This is an alternative approach to above using a static method to construct
// the Summary object.
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man City');
htmlSummary.buildAndPrintReport(matchReader.matches);