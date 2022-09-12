import joi from 'joi';

export const newNoteSchema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    userId: joi.number().required()
});