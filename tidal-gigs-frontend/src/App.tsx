import React from 'react'
// import './App.css'
// import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { getArtist } from './api/artists'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => (
  <Router>
    <div>Sidebar here?</div>
    <Switch>
      <Route path="/surf">
        <div>Surfing!!</div>
      </Route>
      <Route path="/bookings">bookings!</Route>
    </Switch>
  </Router>
)

// function App() {
//   // const [artist, setArtist] = useState(null);

//   useEffect(() => {
//     getArtist(10)
//   }, [])

//   return <div>Nothing here</div>
// }

export default App
