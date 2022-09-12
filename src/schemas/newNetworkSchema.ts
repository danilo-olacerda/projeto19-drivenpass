import joi from 'joi';

export const newNetworkSchema = joi.object({
    userId: joi.number().required(),
    networkName: joi.string().required(),
    password: joi.string().required(),
    name: joi.string().required(),
});