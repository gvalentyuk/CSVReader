import fs from 'fs'

export class CSVreader {
    data: string[][] = []

    constructor(public filename:string) {}

    read():void{
        this.data = fs.readFileSync(this.filename, 'utf-8')
            .split('\n')
            .map((match:string):string[] => match.split(','))
    }
}