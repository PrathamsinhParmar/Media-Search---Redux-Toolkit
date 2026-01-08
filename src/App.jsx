import React from 'react'
import { fetchGIFS, fetchPhotoes, fetchVideos } from './api/mediaApi'
import SearchBar from './componants/SearchBar'
import Tabs from './componants/Tabs'
import ResultGrid from './componants/ResultGrid'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './componants/Navbar'
import About from './pages/About'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div className='h-screen w-full'>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collection' element={<CollectionPage />}/>
      </Routes>
      <ToastContainer />
     
    </div>
  )
}

export default App
