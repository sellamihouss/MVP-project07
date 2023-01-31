import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'

const App = () => {
  const [workouts, setworkouts] = useState([])
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
  }, [])

  return (
    <div>
      <h1>Item List</h1>
      <List workouts={workouts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
