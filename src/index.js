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

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get("/get_quote", (req, res) => {
  const {
    mileage,
    congestion_charge,
    drive_time,
    no_of_floor,
    late_charge,
    carbon_offset,
  } = req.body;

  const distanceTravelled = mileage; // Is this correct?
  const lateHours = 1; // How to get late hours?
  const floorCharge = calculateFloorCharge(no_of_floor);
  const congestionCharge = getCongestionCharge(congestion_charge);
  const lateChage = calculateLateCharge(late_charge, lateHours);
  const carbonOffset = getCarbonOffset(carbon_offset);
  const milageCharge = calculateMilageCharge(distanceTravelled);
  console.log({
    floorCharge,
    congestionCharge,
    lateChage,
    carbonOffset,
    milageCharge,
    drive_time,
  });
  const price = calculatePrice(
    floorCharge,
    congestionCharge,
    lateChage,
    carbonOffset,
    milageCharge,
    drive_time
  );
  res.json({ price });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
