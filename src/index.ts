import { MatchReader } from "./inheritance/MatchReader";
import { Summary } from "./Summary";
console.log("Hi there");

const reader = new MatchReader("football.csv");
reader.read();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrinReport(reader.data);
