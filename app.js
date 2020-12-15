const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoute = require('./Routes/Users');
const ContentRoute = require('./Routes/Content');
const dotenv = require('dotenv');

dotenv.config();

app = express();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection

db.on('err',(err)=>{
    if(err){
        console.log('err')
    }
});
db.once('open',()=>{
    console.log('db connected succesfully')
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/user', UserRoute);
app.use('/content', ContentRoute);


app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
});

app.listen(3000, (err)=>{
if(err){
    console.log(err);
}
console.log('server running on http://localhost:3000')
})

