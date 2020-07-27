"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
var MatchResults_1 = require("../MatchResults");
var WinsAnalyzer = /** @class */ (function () {
    function WinsAnalyzer(team) {
        this.team = team;
    }
    WinsAnalyzer.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var result = matches_1[_i];
            if (result[1] === this.team && result[5] === MatchResults_1.MatchResults.HomeWin) {
                wins++;
            }
            if (result[2] === this.team && result[5] === MatchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return this.team + " won " + wins + " games";
    };
    return WinsAnalyzer;
}());
exports.WinsAnalyzer = WinsAnalyzer;
