import joi from 'joi';

export const newNoteSchema = joi.object({
    title: joi.string().max(50).required(),
    content: joi.string().max(1000).required(),
    userId: joi.number().required()
});