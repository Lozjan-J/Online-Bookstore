import Joi from 'joi';

const schema = Joi.object({
    Name: Joi.string().required().min(5).max(20),
    Author: Joi.string().required().min(5).max(20),
    Category: Joi.string().required().min(1).max(20),
    Language: Joi.string().required().min(1).max(20),
    Genre: Joi.string().required().min(1).max(20),
    Price: Joi.number().required(),
    Image: Joi.object().required()
})

export default schema;