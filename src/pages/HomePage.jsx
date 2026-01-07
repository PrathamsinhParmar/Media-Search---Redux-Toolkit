import React from 'react'
import SearchBar from '../componants/SearchBar'
import Tabs from '../componants/Tabs'
import About from '../pages/About'
import ResultGrid from '../componants/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {


    const {query} = useSelector((store)=>store.search)

  return (
    <div>

      

      <SearchBar />

      {query != '' ? <div><Tabs />
      <ResultGrid /></div> : <div><About /></div>}
      
    </div>
  )
}

export default HomePage
