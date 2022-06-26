const { validateBody } = require('../common/cartProduct-validation');
const CartProduct = require('../Model/cartProduct.model');

exports.create = async(req, res) => {
    try {

        // Validate Request 
        await validateBody(req.body);
        //create a cartProduct
        const cartProduct = new CartProduct({
            productId: req.body.productId,
            amount: req.body.amount,
            totalPrice: req.body.totalPrice,
            cartId: req.body.cartId
        });
        //save cartProduct in the database
        cartProduct.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the cartProduct."
                });
            });
    } catch (error) {
        return res.status(400).send({
            message: error.message || "Some error occurred while creating the cartProduct."
        });
    }



};

exports.findAll = (req, res) => {
    CartProduct.find().then(cartProductsProducts => {
        res.send(cartProductsProducts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cartProductsProducts."
        });
    });
};

exports.findOne = (req, res) => {
    CartProduct.findById(req.params.cartProductId)
        .then(cartProduct => {
            if (!cartProduct) {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            res.send(cartProduct);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            return res.status(500).send({
                message: "Error retrieving cartProduct with id " + req.params.cartProductId
            });
        });
};

exports.update = (req, res) => {


    CartProduct.findByIdAndUpdate(
            req.params.cartProductId, {
                cartProductName: req.body.cartProductName
            }, {}, { new: true })
        .then(cartProduct => {
            if (!cartProduct) {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            res.send(cartProduct);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            return res.status(500).send({
                message: "Error updating cartProduct with id " + req.params.cartProductId
            });
        });
};

exports.delete = (req, res) => {
    CartProduct.findByIdAndRemove(req.params.cartProductId)
        .then(cartProduct => {
            if (!cartProduct) {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            res.send({ message: "cartProduct deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "cartProduct not found with id " + req.params.cartProductId
                });
            }
            return res.status(500).send({
                message: "Could not delete cartProduct with id " + req.params.cartProductId
            });
        });
}