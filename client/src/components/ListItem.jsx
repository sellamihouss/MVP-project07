import React, { useState } from 'react';
import Update from './Update.jsx';

const ListItem = (props) => {
  const [upd,setupd]=useState(false)
  const [desc,setdesc]= useState(false)

  console.log("id",props.item.fav)
  return(
  <div>

  
<div id='div'>
<h4 className='name' onClick={()=>{setdesc(!desc)}}>{ props.item.name}</h4>
 <div id='description'>{desc&&props.item.description}</div>
  <img src={ props.item.imageUrl}/>
<button id='delete' onClick={()=>props.onupdateone(props.id,{fav:!props.item.fav})} >&#x2665;</button>
<button id='delete'onClick={()=>{setupd(!upd)}}>&#10227;</button>
<button id='delete' onClick={()=>{props.ondelete(props.id)}}>&#x2715;</button>
{upd&&<Update/>}</div>
 </div>
)}

export default ListItem;

// const ListItem = (props) => {
//   const [upd,setupd]=useState(false)
//   const [desc,setdesc]= useState(false)
//   console.log(props.id)
//   return(
//     <div class="card" style="width: 18rem;">
//     <img src={ props.item.imageUrl} class="card-img-top" alt="..."></img>
//     <div class="card-body">
//       <h5 class="card-title" onClick={()=>{setdesc(!desc)}}> { props.item.name}</h5>
//       <p class="card-text">{desc&&props.item.description}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//       <button class="btn btn-primary">Add to daily workouts</button>
//   <button class="btn btn-primary" onClick={()=>{setupd(!upd)}}>Update</button>
//   <button class="btn btn-primary" onClick={()=>{props.ondelete(props.id)}}>Delete</button>
//     </div>
//   </div>
// )}