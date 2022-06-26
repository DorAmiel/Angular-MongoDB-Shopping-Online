const Joi = require('joi');

const schema = Joi.object({
    productId: Joi.string().required(),
    amount: Joi.number().required(),
    totalPrice: Joi.number().required(),
    cartId: Joi.string().required()
});


exports.validateBody = async(body) => {
    const { error } = schema.validate(body)
    if (error) {
        throw error
    }
}