import * as utils from "../../utils/quotation_utils";
import {
  congestionCharge as correctCongestionCharge,
  lateCharge as correctLateCharge,
  carbonOffset as correctCarbonOffset,
} from "../../const";

describe("test quotation utils", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("test getCongestionCharge", () => {
    it("should return correct value when isCongested true", () => {
      const congestionCharge = utils.getCongestionCharge(true);
      expect(congestionCharge).toBe(correctCongestionCharge);
    });

    it("should return 0 when isCongested false", () => {
      const congestionCharge = utils.getCongestionCharge(false);
      expect(congestionCharge).toBe(0);
    });
  });

  describe("test calculateLateCharge", () => {
    it("should return correct value when isLate true", () => {
      const lateCharge = utils.calculateLateCharge(true, 1);
      expect(lateCharge).toBe(correctLateCharge);
    });

    it("should return 0 when isLate false", () => {
      const lateCharge = utils.calculateLateCharge(false, 1);
      expect(lateCharge).toBe(0);
    });
  });

  describe("test getCarbonOffset", () => {
    it("should return correct value when isCarbonOffset true", () => {
      const carbonOffset = utils.getCarbonOffset(true);
      expect(carbonOffset).toBe(correctCarbonOffset);
    });

    it("should return 0 when isCarbonOffset false", () => {
      const carbonOffset = utils.getCarbonOffset(false);
      expect(carbonOffset).toBe(0);
    });
  });
});
