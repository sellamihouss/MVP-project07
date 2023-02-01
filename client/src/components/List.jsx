import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
 return(
  <div >
    <h4 style={{"font-size":"50px","color":"black"}}>    Workouts</h4>
    {/* There are {props.items.length} items. */}
    {props.workouts.map((item, index) => (
      <div key={index}>
        <ListItem onupdateone={props.onupdateone} item={item} onupdate={props.onupdate} ondelete={props.ondelete} id={item._id}/>
      </div>
    ))}
  </div>
)};

export default List;
