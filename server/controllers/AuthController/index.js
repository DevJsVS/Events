const express = require('express');
const router = new express.Router();
const validateSingIn = require('./_validateSingIn');

router.post('/sign-up', (req, res) => {

    const validationResult = validateSingIn(req.body);

    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return res.status(200).end();

});

router.post('/sign-in', (req, res) => {

    const validationResult = validateSingIn(req.body);

    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    res.status(200).send({user: "user"});
});

module.exports = router;