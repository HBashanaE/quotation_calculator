const Joi = require("joi");

const getQuoteReqestSchema = Joi.object().keys({
  mileage: Joi.number().integer().required(),
  congestion_charge: Joi.boolean().required(),
  drive_time: Joi.number().integer().required(),
  no_of_floor: Joi.number().integer().required(),
  late_charge: Joi.boolean().required(),
  carbon_offset: Joi.boolean().required(),
});

module.exports = { getQuoteReqestSchema };
