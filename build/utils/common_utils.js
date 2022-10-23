"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToNearest30Minutes = void 0;
const roundToNearest30Minutes = (minutes) => {
    const hours = minutes / 60;
    return (Math.round(hours * 2) / 2) * 60;
};
exports.roundToNearest30Minutes = roundToNearest30Minutes;
