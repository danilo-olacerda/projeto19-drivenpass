import joi from 'joi';

export const newCardSchema = joi.object({
    userId: joi.number().required(),
    cardNumber: joi.string().length(16).required(),
    cardHolder: joi.string().required(),
    expiryDate: joi.string().length(7).required(),
    cvv: joi.string().length(3).required(),
    isVirtual: joi.boolean().required(),
    password: joi.string().required(),
    type: joi.string().length(1).valid('C', 'D', 'A').required(),
    cardName: joi.string().required()
});