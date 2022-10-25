const Joi = require("joi");

const getQuoteReqestSchema = Joi.object().keys({
  mileage: Joi.number().required(),
  congestion_charge: Joi.boolean().required(),
  drive_time: Joi.number().required(),
  no_of_floor: Joi.number().integer().required(),
  late_charge: Joi.boolean().required(),
  carbon_offset: Joi.boolean().required(),
  van_type: Joi.string().valid('SMALL', 'MEDIUM', 'LARGE', 'LUTON')
});

module.exports = { getQuoteReqestSchema };
