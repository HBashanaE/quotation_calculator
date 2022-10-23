"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_utils_1 = require("../../utils/common_utils");
describe("test quotation utils", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe("test getTotalTime", () => {
        it("should round up time to nearest 30 minutes", () => {
            let roundedUpTime = (0, common_utils_1.roundToNearest30Minutes)(100);
            expect(roundedUpTime).toBe(90);
            roundedUpTime = (0, common_utils_1.roundToNearest30Minutes)(106);
            expect(roundedUpTime).toBe(120);
        });
    });
});
