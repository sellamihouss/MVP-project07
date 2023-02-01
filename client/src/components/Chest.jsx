import React from "react";
import ListItem from "./ListItem.jsx";

const Chest = (props) => {
  console.log(props.workouts)
  var filter= props.workouts.filter((e)=>{return e.type==="CHEST"})
  return(
  <div>
    <h4> Chest workouts</h4>
    {/* There are {props.items.length} items. */}
    {filter.map((item, index) => (
      <div key={index}>
        <ListItem onupdateone={props.onupdateone} item={item} id={item._id} onupdate={props.onupdate} ondelete={props.ondelete}/>
      </div>
    ))}
  </div>
)};

export default Chest;
