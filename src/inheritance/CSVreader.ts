import fs from 'fs'
import {MatchResults} from './MatchResults'

type MatchData = [Date, string, string, number, number, MatchResults, string]

export abstract class CSVreader<T> {
    data: T[] = []

    constructor(public filename: string) {
    }

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, 'utf-8')
            .split('\n')
            .map((match: string): string[] => match.split(','))
            .map(this.mapRow)
    }
}