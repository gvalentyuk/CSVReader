"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReporter = void 0;
var ConsoleReporter = /** @class */ (function () {
    function ConsoleReporter() {
    }
    ConsoleReporter.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReporter;
}());
exports.ConsoleReporter = ConsoleReporter;
