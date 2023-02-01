const express = require("express");
const itemRoutes = require('./routes/item.routes')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');
const { findAll,add,remove,update,updateOne } = require("./database-mongo/workout.model");

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api/workouts", itemRoutes);

app.get('/api/workouts',(req,res)=>{
  console.log(req.body)
  findAll((err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
  })})
app.post('/api/workouts',(req,res)=>{
    console.log(req.body)
    add(req.body,(err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
    })})  
app.delete('/api/workouts/:id',(req,res)=>{
    console.log(req.body)
    remove(req.params.id,(err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
    })})
app.put('/api/workouts/:id',(req,res)=>{
    console.log(req.body)
    update(req.params.id,req.body,(err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
    })}) 
app.put("/api/workouts/:id",(req,res)=>{
    console.log(req.body)
    updateOne(req.params.id,req.body,(err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
    })})            

app.listen(PORT, function () {
    console.log("listening on port 3000!");
    });
