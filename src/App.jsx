import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './Hooks/usefetch'
import CardInfo from './Components/CardInfo'
import ResidentsList from './Components/ResidentsList'
import Search from './Components/Search'

function App() {
  const [location, setLocation] = useFetch()
  const [locationId, setLocationId] = useState(1)

  useEffect(() => {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`)
  }, [locationId])

  return (
    <>
      <div className='hero' />
      <div className='container'>
        {/* <h2>{location?.name}</h2> */}
        <Search setLocationId = {setLocationId} />
        <CardInfo location = {location} />
        <ResidentsList residents={location?.residents}/>
      </div>
    </>
  )
}

export default App
