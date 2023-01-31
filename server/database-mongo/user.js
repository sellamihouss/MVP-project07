const mongoose = require("mongoose");
const db = require("./index.js");

const userSchema = new mongoose.Schema({
  userName:{
    type: String,
    unique: true
  },
  activities:Array
});

const User = mongoose.model("user", userSchema);

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