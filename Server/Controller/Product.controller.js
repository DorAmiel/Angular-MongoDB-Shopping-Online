const { validateBody } = require('../common/product-validation');
const Product = require('../Model/Product.model');

exports.create = async(req, res) => {
    try {

        // Validate Request 
        await validateBody(req.body);
        //create a product
        const product = new Product({
            productName: req.body.productName,
            categoryName: req.body.categoryName,
            price: req.body.price,
            image: req.body.image
        });
        //save product in the database
        product.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the product."
                });
            });
    } catch (error) {
        return res.status(400).send({
            message: error.message || "Some error occurred while creating the product."
        });
    }



};

exports.findAll = (req, res) => {
    Product.find().then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.productId
            });
        });
};

exports.update = (req, res) => {


    Product.findByIdAndUpdate(
            req.params.productId, {
                productName: req.body.productName
            }, {}, { new: true })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error updating product with id " + req.params.productId
            });
        });
};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            res.send({ message: "product deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Could not delete product with id " + req.params.productId
            });
        });
}