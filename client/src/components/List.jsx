import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
 return(
  <div>
    <h4 style={{"font-size":"50px","color":"black", "padding-buttom":"20px","marginTop":"30px"}}>Workouts</h4>
  <div className="container">
    {/* There are {props.items.length} items. */}
    {props.workouts.map((item, index) => (
      <div  key={index}>
        <ListItem onupdateone={props.onupdateone} item={item} onupdate={props.onupdate} ondelete={props.ondelete} id={item._id}/>
      </div>
    ))}
    </div>
  </div>
)};

export default List;
