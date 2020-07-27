"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var arr = dateString.split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(arr[2], arr[1] - 1, arr[0]);
};
