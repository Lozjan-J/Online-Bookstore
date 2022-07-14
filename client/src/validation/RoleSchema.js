import Joi from 'joi';

const schema = Joi.object({
    Role: Joi.string().required().min(1).max(1),
})

export default schema;