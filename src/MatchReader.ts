import {MatchResults} from './MatchResults'
import {dateStringToDate} from "./utils";
import {MatchData} from './MatchData'
import {CSVreader} from "./CSVreader";

interface DataReader {
    read(): void;

    data: string[][]
}

export class MatchReader {
    matches: MatchData[] = []

    constructor(public reader: DataReader) {
    }

    static createCSVreader(filename: string): MatchReader {
        return new MatchReader(new CSVreader(filename))
    }

    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map((row: string[]): MatchData => [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults,
            row[6]
        ])
    }
}