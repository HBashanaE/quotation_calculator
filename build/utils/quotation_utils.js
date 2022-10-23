"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePrice = exports.calculateFloorCharge = exports.calculateHelperCharge = exports.calculateDriverCharge = exports.calculateMilageCharge = exports.getCarbonOffset = exports.calculateLateCharge = exports.getCongestionCharge = exports.getStandardLoadingUnloadingTime = exports.getTotalTime = void 0;
const common_utils_1 = require("./common_utils");
const const_1 = require("../const");
const getTotalTime = (driveTime) => {
    if (driveTime < 60) {
        return (0, exports.getStandardLoadingUnloadingTime)() + driveTime;
    }
    return (0, common_utils_1.roundToNearest30Minutes)((0, exports.getStandardLoadingUnloadingTime)() + driveTime);
};
exports.getTotalTime = getTotalTime;
const getStandardLoadingUnloadingTime = () => {
    return 60;
};
exports.getStandardLoadingUnloadingTime = getStandardLoadingUnloadingTime;
const getCongestionCharge = (isCongested) => {
    return isCongested ? const_1.congestionCharge : 0;
};
exports.getCongestionCharge = getCongestionCharge;
const calculateLateCharge = (isLate, lateHours) => {
    return isLate ? const_1.lateCharge : 0;
};
exports.calculateLateCharge = calculateLateCharge;
const getCarbonOffset = (isCarbonOffset) => {
    return isCarbonOffset ? const_1.carbonOffset : 0;
};
exports.getCarbonOffset = getCarbonOffset;
const calculateMilageCharge = (distanceTravelled) => {
    return distanceTravelled * const_1.perMileCharge;
};
exports.calculateMilageCharge = calculateMilageCharge;
const calculateDriverCharge = (totalTime) => {
    return (totalTime / 60) * const_1.driverHourlyRate;
};
exports.calculateDriverCharge = calculateDriverCharge;
const calculateHelperCharge = (totalTime) => {
    return (totalTime / 60) * const_1.helperHourlyRate;
};
exports.calculateHelperCharge = calculateHelperCharge;
const calculateFloorCharge = (noOfFloors) => {
    return const_1.floorChargePerFloor * noOfFloors;
};
exports.calculateFloorCharge = calculateFloorCharge;
const calculatePrice = (floorCharge, congestionCharge, lateChage, carbonOffset, milageCharge, driveTime) => {
    const totalTime = (0, exports.getTotalTime)(driveTime);
    const driverCharge = (0, exports.calculateDriverCharge)(totalTime);
    const helperCharge = (0, exports.calculateHelperCharge)(totalTime);
    const price = driverCharge +
        helperCharge +
        floorCharge +
        congestionCharge +
        lateChage +
        carbonOffset +
        milageCharge;
    return price;
};
exports.calculatePrice = calculatePrice;
