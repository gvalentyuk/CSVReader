import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

const matchReader = MatchReader.createCSVreader('football.csv')
matchReader.load()

const result = Summary.createSummary('Man United')
result.buildAndPrintReport(matchReader.matches)

