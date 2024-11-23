import joi from "joi";

export const rideDataSchema = joi.object({
  id: joi.number().required(),
  customer_id: joi.string().required(),
  origin: joi.string().required(),
  destination: joi.string().required(),
  distance: joi.number().required(),
  duration: joi.string().required(),
  driver: joi
    .object({
      id: joi.number().required(),
      name: joi.string().required(),
    })
    .required(),
  value: joi.number().positive().required(),
  date: joi.string().isoDate().required(),
});
