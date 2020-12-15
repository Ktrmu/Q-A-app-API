const express = require('express');
const router = express.Router();
const User = require('../Models/UserModels');
const Joi = require('@hapi/joi');
const {registerValidation, loginValidation} = require('../validation');


router.get('/', (req, res)=>{
    res.send('<h1> I am Users </h1>')
});

router.get('/register', (req, res)=>{
    res.send('<h1> I am register </h1>')
});

router.post('/register', async (req, res) => {
        const { error } = registerValidation(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        // // Checking if the user is already in the database
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist)
            return res, status(400).send('Email already exists');

        const user = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        try {
            const newUser = user.save();
            res.json({ content: content._id });
        }
        catch (err) {
            res.send(err);
        }

    });

router.post('/login',(req, res)=>{
    const { error } = loginValidation.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);



// Create a new user
    const user = new User ({
        password: req.body.password,
        email: req.body.email
    })
try{
        const newUser = user.save();
        res.json({content: content._id});
    }
catch(err){
    res.send(err)
}

});

module.exports = router;
