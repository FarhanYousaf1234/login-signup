const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usermodel = require('./models/usermodel');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://shiekhfarhanyousaf1813:farhan1234@cluster0.einbzzv.mongodb.net/MERNsimpleproject")
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  app.post('/login', async (req, res) => {
    const{email,password}=req.body
    usermodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
            }
            else{
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
        else{
            res.json("no record found ")
        }
    })
  });
app.post('/register', async (req, res) => {
  try {
    const user = await usermodel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
