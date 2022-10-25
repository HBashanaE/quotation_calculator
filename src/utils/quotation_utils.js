const { roundToNearest30Minutes } = require("./common_utils");
const {
  congestionCharge,
  lateCharge,
  carbonOffset,
  perMileCharge,
  floorChargePerFloor,
} = require("../const");

const getTotalTime = (driveTime, vanType) => {
  if (driveTime < 1) {
    return 2;
  }
  return roundToNearest30Minutes(getStandardLoadingUnloadingTime(vanType) + driveTime);
};

const getStandardLoadingUnloadingTime = (van_type) => {
  switch (van_type) {
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

const calculateLateCharge = (isLate, lateHours) => {
  return isLate ? lateCharge : 0;
};

const getCarbonOffset = (isCarbonOffset) => {
  return isCarbonOffset ? carbonOffset : 0;
};

const calculateMilageCharge = (distanceTravelled) => {
  return distanceTravelled * perMileCharge;
};

const calculateCharge = (totalTime, hourlyRate) => {
  return totalTime * hourlyRate;
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
  driver_hourly_rate,
  helper_hourly_rate,
  vanType
) => {
  const totalTime = getTotalTime(driveTime, vanType);
  const driverCharge = calculateCharge(totalTime, driver_hourly_rate);
  const helperCharge = calculateCharge(totalTime, helper_hourly_rate);

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
