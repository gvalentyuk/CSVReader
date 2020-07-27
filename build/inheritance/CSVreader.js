"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVreader = void 0;
var fs_1 = __importDefault(require("fs"));
var CSVreader = /** @class */ (function () {
    function CSVreader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVreader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, 'utf-8')
            .split('\n')
            .map(function (match) { return match.split(','); })
            .map(this.mapRow);
    };
    return CSVreader;
}());
exports.CSVreader = CSVreader;
