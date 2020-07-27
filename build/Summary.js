"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var ConsoleReporter_1 = require("./ouputReporters/ConsoleReporter");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.createSummary = function (team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new ConsoleReporter_1.ConsoleReporter());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
