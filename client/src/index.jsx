import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from 'axios'
import Abs from './components/Abs.jsx'
import Arm from './components/Arm.jsx'
import Legs from './components/Legs.jsx'
import Chest from './components/Chest.jsx'
import Daily from './components/Daily.jsx'
import Create from './components/Create.jsx'
import Home from './components/Home.jsx'

const App = () => {
  const [view,setview]=useState("ALL")
  const [workouts, setworkouts] = useState([])
  const [maj,setmaj]=useState(false)
  useEffect(() => {
    $.ajax({
      url: '/api/workouts',
      success: (data) => {
        console.log(data)
        setworkouts(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [maj])
  const create =(body)=>{
    axios.post("/api/workouts",body)
    .then(result=>console.log(result),
    setmaj(!maj))
    .catch(err=>console.log(err))
  }
   const deletee =(id)=>{
    axios.delete(`/api/workouts/${id}`)
    .then(result=>console.log(result),
    setmaj(!maj))
    .catch(err=>console.log(err))
  }
   const update =(id,body)=>{
    axios.put(`/api/workouts/${id}`,body)
    .then(result=>console.log(result),
    setmaj(!maj))
    .catch(err=>console.log(err))
  }
  const updateOne=(id,body)=>{
    axios.put(`/api/workouts/${id}`,body)
    .then(result=>console.log(result),
    setmaj(!maj))
    .catch(err=>console.log(err))
  }

  const renderView = () => {
    if (view === "ALL") {
      return <List workouts={workouts} onupdate={update} ondelete={deletee} onupdateone={updateOne} />;
    } 
    else if (view === "ABS") {
      return <Abs workouts={workouts} onupdate={update} ondelete={deletee} onupdateone={updateOne}/>
    } 
    else if (view === "ARM") {
      return <Arm workouts={workouts} onupdate={update} ondelete={deletee} onupdateone={updateOne}/>
    } 
    else if (view === "CHEST") {
      return <Chest workouts={workouts} onupdate={update} ondelete={deletee} onupdateone={updateOne}/>
    } 
    else if (view === "LEG") {
      return <Legs workouts={workouts} onupdate={update} ondelete={deletee} onupdateone={updateOne}/>
    }
    else {<Home/>}
  }

  return (
    <div>
    <img id='title' src='https://marketplace.canva.com/EAE7rpHi2uc/1/0/1600w/canva-grey-simple-photo-quote-workout-gym-zoom-virtual-background-sgLnnLb1ecc.jpg' />
    {/* <img id='title' src='https://img.mensxp.com/media/content/2014/Nov/25fitnessquoteseverymanmustliveby6_1416381232.jpg' /> */}
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{"color":"black","fontSize":"xxx-large","font":"bold"}}>HOME GYM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setview('ALL')}>All Workouts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setview('CHEST')}>Chest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setview('ARM')}>Arms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"onClick={() => setview('ABS')}>Abs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"onClick={() => setview('LEG')}>Legs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.california-gym.com/tn/">Link</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
      <div id='create'>{<Create oncreate={create}/>}</div>
<div className='grid'>

  <div className="main" id='grid'>
        {renderView()}
      </div>
      <div className='my'>
      { <Daily data={workouts} onupdateone={updateOne}/>}
      </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


{/* <div id='imgdiv'> <img id='bodyimage' url='https://media.istockphoto.com/id/831536516/vector/male-body-muscle-black-silhouette.jpg?s=612x612&w=0&k=20&c=Hs5YnHfvU6CCRNTXS3MHxwcFR72riMAjbM04GsPjN1k='/></div> */}