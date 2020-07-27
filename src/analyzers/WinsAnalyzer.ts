import {Analyzer} from "../Summary";
import {MatchResults} from "../MatchResults";
import {MatchData} from "../MatchData";

export class WinsAnalyzer implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let wins: number = 0

        for (let result of matches) {
            if (result[1] === this.team && result[5] === MatchResults.HomeWin) {
                wins++
            }
            if (result[2] === this.team && result[5] === MatchResults.AwayWin) {
                wins++
            }
        }

        return `${this.team} won ${wins} games`
    }
}