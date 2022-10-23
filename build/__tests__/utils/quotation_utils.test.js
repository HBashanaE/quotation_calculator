"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("../../utils/quotation_utils"));
const const_1 = require("../../const");
describe("test quotation utils", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe("test getCongestionCharge", () => {
        it("should return correct value when isCongested true", () => {
            const congestionCharge = utils.getCongestionCharge(true);
            expect(congestionCharge).toBe(const_1.congestionCharge);
        });
        it("should return 0 when isCongested false", () => {
            const congestionCharge = utils.getCongestionCharge(false);
            expect(congestionCharge).toBe(0);
        });
    });
    describe("test calculateLateCharge", () => {
        it("should return correct value when isLate true", () => {
            const lateCharge = utils.calculateLateCharge(true, 1);
            expect(lateCharge).toBe(const_1.lateCharge);
        });
        it("should return 0 when isLate false", () => {
            const lateCharge = utils.calculateLateCharge(false, 1);
            expect(lateCharge).toBe(0);
        });
    });
    describe("test getCarbonOffset", () => {
        it("should return correct value when isCarbonOffset true", () => {
            const carbonOffset = utils.getCarbonOffset(true);
            expect(carbonOffset).toBe(const_1.carbonOffset);
        });
        it("should return 0 when isCarbonOffset false", () => {
            const carbonOffset = utils.getCarbonOffset(false);
            expect(carbonOffset).toBe(0);
        });
    });
});
