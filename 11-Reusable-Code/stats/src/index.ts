import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HTMLReport } from "./reportTargets/HTMLReport";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HTMLReport());
summary.buildAndPrintReport(matchReader.matches);

const summaryStatic = Summary.winsAnalysisWithHTMLReport("Man United");
summaryStatic.buildAndPrintReport(matchReader.matches);
