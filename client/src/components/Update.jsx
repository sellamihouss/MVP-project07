import React,{useState} from 'react'

const Update = () => {
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
        props.onupdate({
            type:type,
            name:name,
            imageUrl:gif,
            description:desc,
            sets:sets
        })
    }
  return (
    <div className="input-group input-group-sm mb-3">
        <div>
    <span className="input-group-text" id="inputGroup-sizing-sm">Type</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  onChange={changetype}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changename}/>
    </div> <div>
    <span className="input-group-text" id="inputGroup-sizing-sm">Gif</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changegif}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changedesc}/>
    <span className="input-group-text" id="inputGroup-sizing-sm">Sets</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changesets}/>
    <button type="button" className="btn btn-danger" onClick={handleclick}>Update</button>
    </div>
  </div>
  )
}

export default Update
