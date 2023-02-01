import React from "react";
import ListItem from "./ListItem.jsx";

const Legs = (props) => {
  console.log(props.workouts)
  var filter= props.workouts.filter((e)=>{return e.type==="LEG"})
  return(
  <div>
    <h4> Legs workouts </h4>
    {/* There are {props.items.length} items. */}
    {filter.map((item, index) => (
      <div key={index}>
        <ListItem onupdateone={props.onupdateone} item={item} id={item._id} onupdate={props.onupdate} ondelete={props.ondelete}/>
      </div>
    ))}
  </div>
)};

export default Legs;
