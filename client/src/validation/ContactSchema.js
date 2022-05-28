import Joi from "joi";

const schema = Joi.object({
    username: Joi.string().required().min(5).max(10),
    email: Joi.string().email({ tlds: { allow: false } }).min(5).max(30).required(),
    msg: Joi.string().required().min(10)
})

export default schema;