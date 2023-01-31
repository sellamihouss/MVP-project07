const mongoose = require("mongoose");
const db = require("./index.js");

const workoutSchema = new mongoose.Schema({
  type:String,
  name:String,
  imageUrl:String,
  description: String,
  sets: Number,
});

const Workout = mongoose.model("Workout", workoutSchema);

const findAll=(callback)=>{
  return Workout.find(callback)
}
const add=(body,callback)=>{
  return Workout.create(body,callback)
}
const remove=(id,callback)=>{
  return Workout.findByIdAndDelete(id,callback)
}
const update=(id,body,callback)=>{
  return Workout.findByIdAndUpdate(id,body,callback)
}

module.exports = {
  findAll,add,remove,update
}