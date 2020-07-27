"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.createCSVreader('football.csv');
matchReader.load();
var result = Summary_1.Summary.createSummary('Man United');
result.buildAndPrintReport(matchReader.matches);
