const { roundToNearest30Minutes } = require("./common_utils");
const {
  congestionCharge,
  lateCharge,
  carbonOffset,
  perMileCharge,
  floorChargePerFloor,
  helperHourlyRate,
} = require("../const");

const getTotalTime = (driveTime, vanType) => {
  if (driveTime < 1) {
    return 2;
  }
  return roundToNearest30Minutes(getStandardLoadingUnloadingTime(vanType) + driveTime);
};

const getStandardLoadingUnloadingTime = (vanType) => {
  switch (vanType) {
    case "SMALL":
      return 1;
    case "MEDIUM":
      return 1;
    case "LARGE":
      return 2;
    case "LUTON":
      return 3;
    default:
      break;
  }
};

const getCongestionCharge = (isCongested) => {
  return isCongested ? congestionCharge : 0;
};

const calculateLateCharge = (isLate, driveTime) => {
  return isLate ? driveTime/4 : 0;
};

const getCarbonOffset = (isCarbonOffset) => {
  return isCarbonOffset ? carbonOffset : 0;
};

const calculateMilageCharge = (distanceTravelled) => {
  return distanceTravelled * perMileCharge;
};

const calculateDriverCharge = (totalTime, vanType) => {
  let driverHourlyRate;
  switch (vanType) {
    case "SMALL":
      driverHourlyRate = 50;
    case "MEDIUM":
      driverHourlyRate = 60;
    case "LARGE":
      driverHourlyRate = 70;
    case "LUTON":
      driverHourlyRate = 90;
    default:
      break;
  }
  return totalTime * driverHourlyRate;
};

const calculateHelperCharge = (totalTime) => {
  return totalTime * helperHourlyRate;
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
  driveTime,
  vanType
) => {
  const totalTime = getTotalTime(driveTime, vanType);
  const driverCharge = calculateDriverCharge(totalTime, vanType);
  const helperCharge = calculateHelperCharge(totalTime);

  console.log("Calculate", {
    driverCharge,
    helperCharge,
    floorCharge,
    congestionCharge,
    lateChage,
    carbonOffset,
    milageCharge,
  });

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
