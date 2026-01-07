import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {


let [search, setSearch] = useState(null)

const dispatch = useDispatch()

const submitHandler = (e)=>{
    e.preventDefault()

    dispatch(setQuery(search))

    setSearch('')
}



  return (
    <div>
      <form id='searchForm' className='w-full flex gap-5 px-10 py-5 '
         onSubmit={(e)=>{
                submitHandler(e)
            }}
      >
        <input  id='searchInput'
        required
        className='px-4 py-2 text-lg rounded outline-none border w-full'
        type="text" 
        placeholder='Search Anything...' 
        value={search}
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
        />
        <button id='searchBtn' className='px-4 py-2 text-lg rounded outline-none border active:bg-gray-700 '>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
