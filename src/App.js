import './App.css';
import  { useEffect, useState } from 'react'

import { DataStore } from '@aws-amplify/datastore';
import { Artists } from './models';

function App() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getArtists = async () => {
      const models = await DataStore.query(Artists)
      setArtists(models)
    }

    getArtists()
  }, [])

  const createArtist = async () => {
    const artist = {
      name: 'Pearl Jam',
      rate: 0.004,
      streams: 10284436
    }

    await DataStore.save(
      new Artists({ artist })
    )
    console.log('Artist: ', artist)
  }

  /* const deleteArtist = async (artistID) => {
    const modelToDelete = await DataStore.query(Artists, artistID);
    DataStore.delete(modelToDelete);
  } */

  return (
    <div className="App">
      <button onClick={createArtist}>Create Artist</button>
      {artists.map(artist => <div key={artist.id}>
        <h1>{artist.name}</h1>
        <p>Rate: {artist.rate}</p>
        <p>Streams: {artist.streams}</p>
        {/* <button onClick={deleteArtist(artist.id)}>Delete</button> */}
      </div>)}
    </div>
  );
}

export default App;
