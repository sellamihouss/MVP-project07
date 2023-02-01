import React from 'react'

const Daily = (props) => {
   var array=props.data.filter((e,i)=>{return e.fav===true})
   console.log("this is it",props.data);
  return (
      <div><h1 className='name' style={{"color":"black"}}>Daily workouts</h1>
    <div id='daily'>
      {array.map((e)=>(
        <div>
            <h4 className='name'>{e.name}</h4>
           
           <img src={e.imageUrl} alt="train hard" /> 
           <h3>Number of sets: {e.sets}</h3>
           <button id='delete' style={{"border": "2px solid darkred","border-radius": "5px","size":"10px"}} onClick={()=>props.onupdateone(e.id,{fav:!props.item.fav})}>DONE</button>
            
        </div>
      ))}
    </div></div>
  )
}

export default Daily

// var array=[{
//     "_id": "63d9329f912a7e2a1501be7a",
//     "type": "ABS",
//     "name": "russian twist",
//     "imageUrl": "https://media1.giphy.com/media/cpKD9u3S25xYL8tcbr/giphy.gif",
//     "description": "You lean back, raise your legs off the ground, and twist your torso from side to side",
//     "sets": 5,
//     "__v": 0
//   }]