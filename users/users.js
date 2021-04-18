const express = require('express');
const router = express.Router();
const User = require('../User/User');


//get back posts
router.get('/', async (req, res) =>   {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});

//submits a post
router.post('/', async (req,res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    try{
    const savedUser = await user.save()
    res.json(savedUser);
    }catch(err){
        res.json({ message: err });
    }

        
});

//SPECIFIC POST
router.get('/:userId', async (req,res) => {
    try {
    const user = await User.findById(req.params.userId);
    res.json(user);
    } catch (err) {
        res.json({message:err});
    }
});

//Delete specific POST
router.delete('/:userId', async (req,res) => {
    try {
    const user = await User.findById(req.params.userId);
    res.json(user);
    } catch (err) {
        res.json({message:err});
    }
});

//UPDATE A POST
router.patch('/:postId', async (req,res) => {
    try{
        const updatedUser = await User.updateOne(
        {_id: req.params.userId},
        { $set:{username: req.body.username} }
        );
        res.json(updatedUser);
    
    }catch (err) {
        res.json({message:err});
    }
});

/* signup route api
app.post('/signup', async(req, res) => {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);

    let user = new User({
        email,
        password,
    })
    console.log(user);

    await user.save();
    //check db for email if email say the email is already taken
    //res.send("Signup api route");
}); */

module.exports = router;

