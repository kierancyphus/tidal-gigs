import React from 'react';
import './App.css';
// import { ArtistRequest } from './protos/artists_pb'
// import { ArtistsClient } from './protos/artists_grpc_web_pb'
// import { useState } from 'react';
import { useEffect } from 'react';
const axios = require('axios')
// var client = new ArtistsClient('http://localhost:8081')

function App() {
  // const [artist, setArtist] = useState(null);

  const getArtist = async () => {
    const url = "http://localhost:5000/get-artists/10"
    try {
      console.log("about to make a request")
      const response = await axios.get(url)
      console.log(response)
    } catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    getArtist()
  }, [])

  return (
    <div>
      Nothing here
    </div>
  );
}

export default App;
