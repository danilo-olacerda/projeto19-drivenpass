import joi from 'joi';

export const newDocumentSchema = joi.object({
    userId: joi.number().required(),
    name: joi.string().required(),
    emissionDate: joi.string().length(10).required(),
    expiryDate: joi.string().length(10).required(),
    registerNumber: joi.string().required(),
    emissor: joi.string().required(),
    type: joi.string().valid("RG", "CNH").required(),
});