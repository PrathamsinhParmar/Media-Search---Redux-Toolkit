import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../componants/CollectionCard'
import { clearCollection, clearCollectionToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {


  const collection = useSelector((state) => state.collection.items)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex flex-wrap justify-between items-center'>
        <h1 id='gradient-text' className='font-medium text-2xl px-5 mt-3'>Your Media</h1>
        <button className='bg-red-600 px-3 py-2 mr-5 text-white text-xs font-medium rounded active:bg-red-300)'
          onClick={()=>{
            dispatch(clearCollection())
            dispatch(clearCollectionToast())
          }}
        >Clear</button>
      </div>
      <div id='cardContainer' className=' flex flex-wrap gap-5 px-10 py-5 w-full justify-start overflow-auto '>
        {!collection ? <h1>Please Add Something In Your Collection</h1> : collection.map((item) => {
          return <CollectionCard item={item} />
        })}
        
      </div>
    </div>

  )
}

export default CollectionPage
