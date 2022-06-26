const User = require('../Model/User.model');

exports.create = (req, res) => {

    if (!req.body.firstName) {
        return res.status(400).send({
            message: "First name can not be empty"
        });
    }
    if (!req.body.lastName) {
        return res.status(400).send({
            message: "Last name can not be empty"
        });
    }
    if (!req.body.username) {
        return res.status(400).send({
            message: "username can not be empty"
        });
    }
    if (!req.body.password) {
        return res.status(400).send({
            message: "password can not be empty"
        });
    }
    if (!req.body.email) {
        return res.status(400).send({
            message: "email can not be empty"
        });
    }




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

    // Save pet in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
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
    // Validate Request
    if (!req.body.Name) {
        return res.status(400).send({
            message: "user Name can not be empty"
        });
    }

    User.findByIdAndUpdate(req.params.userId, {
            Name: req.body.Name,
            Animal: req.body.Animal,
            Age: req.body.Age
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