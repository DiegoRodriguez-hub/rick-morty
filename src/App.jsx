import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
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
    <div>
      <h1>Rick and Morty</h1>
      <div>
        {/* <h2>{location?.name}</h2> */}
        <Search setLocationId = {setLocationId} />
        <CardInfo location = {location} />
        <ResidentsList residents={location?.residents}/>
      </div>
    </div>
  )
}

export default App
