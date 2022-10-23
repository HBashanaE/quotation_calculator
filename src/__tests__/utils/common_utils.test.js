const {roundToNearest30Minutes} = require("../../utils/common_utils");

describe("test quotation utils", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    describe("test getTotalTime", () => {
        it('should round up time to nearest 30 minutes', () => {
            let roundedUpTime = roundToNearest30Minutes(100);
            expect(roundedUpTime).toBe(90);

            roundedUpTime = roundToNearest30Minutes(106);
            expect(roundedUpTime).toBe(120);
        });
    });
});