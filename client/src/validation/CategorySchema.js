import Joi from 'joi';

const schema = Joi.object({
    Name: Joi.string().required().min(3).max(20),
})

export default schema;