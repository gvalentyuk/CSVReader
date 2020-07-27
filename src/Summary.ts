import {MatchData} from "./MatchData";
import {WinsAnalyzer} from "./analyzers/WinsAnalyzer";
import {ConsoleReporter} from "./ouputReporters/ConsoleReporter";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static createSummary(team:string):Summary{
        return new Summary(new WinsAnalyzer(team), new ConsoleReporter())
    }

    buildAndPrintReport(matches: MatchData[]):void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}