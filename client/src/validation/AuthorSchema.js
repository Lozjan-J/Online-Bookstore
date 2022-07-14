import Joi from 'joi';

const schema = Joi.object({
    FirstName: Joi.string().required().min(3).max(20),
    LastName: Joi.string().required().min(3).max(20)
})

export default schema;