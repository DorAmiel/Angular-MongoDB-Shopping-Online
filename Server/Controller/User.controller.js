const { validateBody } = require('../common/user-validation');
const User = require('../Model/User.model');

exports.create = async(req, res) => {
    try {
        // Validate Request 
        await validateBody(req.body);
        //create a user
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            idNumber: req.body.idNumber,
            password: req.body.password,
            city: req.body.city,
            street: req.body.street,
            role: req.body.role || 'user',
        });
        //save user in the database
        user.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the user."
                });
            });
    } catch (error) {
        return res.status(400).send({
            message: error.message || "Some error occurred while creating the User."
        });
    }



};

exports.findAll = (req, res) => {
    User.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
};

exports.update = (req, res) => {

    User.findByIdAndUpdate(
            req.params.userId, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                idNumber: req.body.idNumber,
                password: req.body.password,
                city: req.body.city,
                street: req.body.street
            }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            res.send({ message: "user deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userId
            });
        });
}