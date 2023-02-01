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

