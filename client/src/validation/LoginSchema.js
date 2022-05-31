import Joi from 'joi';

const schema = Joi.object({
    username: Joi.string().required().min(5).max(10),
    password: Joi.string().alphanum().min(5).max(30).required()
})

export default schema;