"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const quotation_utils_1 = require("./utils/quotation_utils");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = 3000;
app.get("/get_quote", (req, res) => {
    const { mileage, congestion_charge, drive_time, no_of_floor, late_charge, carbon_offset, } = req.body;
    const distanceTravelled = mileage; // Is this correct?
    const lateHours = 1; // How to get late hours?
    const floorCharge = (0, quotation_utils_1.calculateFloorCharge)(no_of_floor);
    const congestionCharge = (0, quotation_utils_1.getCongestionCharge)(congestion_charge);
    const lateChage = (0, quotation_utils_1.calculateLateCharge)(late_charge, lateHours);
    const carbonOffset = (0, quotation_utils_1.getCarbonOffset)(carbon_offset);
    const milageCharge = (0, quotation_utils_1.calculateMilageCharge)(distanceTravelled);
    console.log({
        floorCharge,
        congestionCharge,
        lateChage,
        carbonOffset,
        milageCharge,
        drive_time,
    });
    const price = (0, quotation_utils_1.calculatePrice)(floorCharge, congestionCharge, lateChage, carbonOffset, milageCharge, drive_time);
    res.json({ price });
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
