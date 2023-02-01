import React from "react";
import ListItem from "./ListItem.jsx";

const Abs = (props) => {
  console.log(props.workouts)
  var filter= props.workouts.filter((e)=>{return e.type==="ABS"})
  return(
  <div>
    <h4 id="name"> Abs workouts </h4>
    {/* There are {props.items.length} items. */}
    {filter.map((item, index) => (
      <div key={index}>
        <ListItem onupdateone={props.onupdateone} item={item} id={item._id} onupdate={props.onupdate} ondelete={props.ondelete}/>
      </div>
    ))}
  </div>
)};

export default Abs;
