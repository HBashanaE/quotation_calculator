const express = require("express");
const bodyParser = require("body-parser");

const {
  calculatePrice,
  calculateFloorCharge,
  getCongestionCharge,
  calculateLateCharge,
  getCarbonOffset,
  calculateMilageCharge,
} = require("./utils/quotation_utils");
const { getQuoteReqestSchema } = require("./validators/schemas");

const app = express();
app.use(bodyParser.json());

require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/get_quote", (req, res) => {
  const result = getQuoteReqestSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    res.status(422).json({
      data: value,
      message,
    });
  } else {
    const {
      mileage,
      congestion_charge,
      drive_time,
      no_of_floor,
      late_charge,
      carbon_offset,
      van_type,
    } = value;

    const floorCharge = calculateFloorCharge(no_of_floor);
    const congestionCharge = getCongestionCharge(congestion_charge);
    const lateChage = calculateLateCharge(late_charge, drive_time);
    const carbonOffset = getCarbonOffset(carbon_offset);
    const milageCharge = calculateMilageCharge(mileage);
    console.log({
      mileage,
      congestion_charge,
      drive_time,
      no_of_floor,
      late_charge,
      carbon_offset,
      van_type,
    });
    const price = calculatePrice(
      floorCharge,
      congestionCharge,
      lateChage,
      carbonOffset,
      milageCharge,
      drive_time,
      van_type
    );
    res.json({ price });
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
