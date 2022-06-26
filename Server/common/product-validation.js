const Joi = require('joi');

const schema = Joi.object({
    productName: Joi.string().required(),
    categoryName: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required()
});


exports.validateBody = async(body) => {
    const { error } = schema.validate(body)
    if (error) {
        throw error
    }
}