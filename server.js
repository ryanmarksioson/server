const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config');
const bodyParser =  require('body-parser');
const cors = require('cors');
const port = 5000 || process.env.port

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
 
//Import Routes
const usersRoute = require('./users/users');

//Routes
app.use('/users',usersRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

async function connectDB(){
await mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);
}
connectDB();

/*
//this takes the post body
app.use(express.json({extended: false}));
//models
    const schema = new mongoose.Schema({ email: 'string', password: 'string' });
    const User = mongoose.model('User', schema); */





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})