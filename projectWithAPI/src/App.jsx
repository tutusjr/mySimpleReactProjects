
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api'
import { useState } from 'react'
import Images from './Images'

function App() {

const [searchResults, setSearchResults] = useState([]);  


  const handleSubmit = async (query) => {
    console.log(query)
    try{
      const response = await searchImages(query)
      setSearchResults(response.results)
      if(response.results.length === 0){
        alert('No results found')
      }
    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <SearchHeader search={handleSubmit} />
       <Images results={searchResults} /> 
    </>
  )
}

export default App
