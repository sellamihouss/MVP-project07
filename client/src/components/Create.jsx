import React, { useState } from 'react'

const Create = (props) => {
    const [type,settype]=useState("")
    const [name,setname]=useState("")
    const [gif,setgif]=useState("")
    const [desc,setdesc]=useState("")
    const [sets,setsets]=useState("")
    

    const changetype=(e)=>{
    settype(e.target.value)
    }
    const changename=(e)=>{
    setname(e.target.value)
    }
    const changegif=(e)=>{
    setgif(e.target.value)
    }
    const changedesc=(e)=>{
    setdesc(e.target.value)
    }
    const changesets=(e)=>{
    setsets(e.target.value)
    }
    const handleclick=()=>{
        props.oncreate({
            type:type,
            name:name,
            imageUrl:gif,
            description:desc,
            sets:sets
        })
    }
  return (
    <div className="input-group input-group-sm mb-3">
    <span className="input-group-text" id="inputGroup-sizing-sm">Type</span>
    <input type="text" className="create" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  onChange={changetype}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Workout name</span>
    <input type="text" className="create" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changename}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">GifUrl</span>
    <input type="text" className="create" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changegif}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
    <input type="text" className="create" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changedesc}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Number of sets</span>
    <input type="text" className="create" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changesets}/>
    <button type="button" class="btn btn-success" onClick={handleclick}>create</button>
  </div>
  )
}

export default Create

