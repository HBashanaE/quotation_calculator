const { roundToNearest30Minutes } = require("./common_utils");
const {
  congestionCharge,
  lateCharge,
  carbonOffset,
  perMileCharge,
  driverHourlyRate,
  helperHourlyRate,
  floorChargePerFloor,
} = require("../const");

const getTotalTime = (driveTime) => {
  if (driveTime < 60) {
    return getStandardLoadingUnloadingTime() + driveTime;
  }
  return roundToNearest30Minutes(getStandardLoadingUnloadingTime() + driveTime);
};

const getStandardLoadingUnloadingTime = () => {
  return 60;
};

const getCongestionCharge = (isCongested) => {
  return isCongested ? congestionCharge : 0;
};

const calculateLateCharge = (isLate, lateHours) => {
  return isLate ? lateCharge : 0;
};

const getCarbonOffset = (isCarbonOffset) => {
  return isCarbonOffset ? carbonOffset : 0;
};

const calculateMilageCharge = (distanceTravelled) => {
  return distanceTravelled * perMileCharge;
};

const calculateDriverCharge = (totalTime) => {
  return (totalTime / 60) * driverHourlyRate;
};

const calculateHelperCharge = (totalTime) => {
  return (totalTime / 60) * helperHourlyRate;
};

const calculateFloorCharge = (noOfFloors) => {
  return floorChargePerFloor * noOfFloors;
};

const calculatePrice = (
  floorCharge,
  congestionCharge,
  lateChage,
  carbonOffset,
  milageCharge,
  driveTime
) => {
  const totalTime = getTotalTime(driveTime);
  const driverCharge = calculateDriverCharge(totalTime);
  const helperCharge = calculateHelperCharge(totalTime);

  const price =
    driverCharge +
    helperCharge +
    floorCharge +
    congestionCharge +
    lateChage +
    carbonOffset +
    milageCharge;
  return price;
};

module.exports = {
  calculatePrice,
  calculateFloorCharge,
  getCongestionCharge,
  calculateLateCharge,
  getCarbonOffset,
  calculateMilageCharge,
  getStandardLoadingUnloadingTime,
  getTotalTime,
};
