import joi from 'joi';

export const newCredentialSchema = joi.object({
    userId: joi.number().required(),
    url: joi.string().required(),
    title: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
});