import Joi from "joi";

export const steps = Joi.object({
  message: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.array().items(
    Joi.object().keys({
      title: Joi.string(),
      description: Joi.string().required(),
    })
  ),
  image: Joi.string().required(),
  position: Joi.number().required(),
});

export const createSteps = Joi.object({
  body: Joi.object().required(),
});
