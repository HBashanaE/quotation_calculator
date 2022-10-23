import { roundToNearest30Minutes } from "./common_utils";
import {
  congestionCharge,
  lateCharge,
  carbonOffset,
  perMileCharge,
  driverHourlyRate,
  helperHourlyRate,
  floorChargePerFloor,
} from "../const";

export const getTotalTime = (driveTime: number) => {
  if (driveTime < 60) {
    return getStandardLoadingUnloadingTime() + driveTime;
  }
  return roundToNearest30Minutes(getStandardLoadingUnloadingTime() + driveTime);
};

export const getStandardLoadingUnloadingTime = () => {
  return 60;
};

export const getCongestionCharge = (isCongested: boolean) => {
  return isCongested ? congestionCharge : 0;
};

export const calculateLateCharge = (isLate: boolean, lateHours: number) => {
  return isLate ? lateCharge : 0;
};

export const getCarbonOffset = (isCarbonOffset: boolean) => {
  return isCarbonOffset ? carbonOffset : 0;
};

export const calculateMilageCharge = (distanceTravelled: number) => {
  return distanceTravelled * perMileCharge;
};

export const calculateDriverCharge = (totalTime: number) => {
  return (totalTime / 60) * driverHourlyRate;
};

export const calculateHelperCharge = (totalTime: number) => {
  return (totalTime / 60) * helperHourlyRate;
};

export const calculateFloorCharge = (noOfFloors: number) => {
  return floorChargePerFloor * noOfFloors;
};

export const calculatePrice = (
  floorCharge: number,
  congestionCharge: number,
  lateChage: number,
  carbonOffset: number,
  milageCharge: number,
  driveTime: number
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
