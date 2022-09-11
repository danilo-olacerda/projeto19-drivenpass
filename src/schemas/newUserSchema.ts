import joi from 'joi';

export const newUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required()
});