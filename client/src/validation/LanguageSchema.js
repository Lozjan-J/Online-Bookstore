import Joi from 'joi';

const schema = Joi.object({
    Lang: Joi.string().required().min(3).max(20),
})

export default schema;