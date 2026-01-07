import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeCollection = (item)=>{
        dispatch(removeFromCollection(item))
        dispatch(removeToast(item))
    }

  return (
    <div>
         <div id='contentContainer' className='h-60 w-[17vw] bg-gray-200 rounded relative overflow-hidden'>
            <a href={item.url} target='_blank' className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay muted loop src={item.url}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.thumbnail} alt="" /> : ''}

            </a>
                
            <div className='w-full absolute bottom-0 text-white p-2 flex items-end justify-between'>
                <h2 className='font-semibold capitalize text-xs'>{item.title}</h2>
                <button className='font-medium capitalize text-xs bg-(--c3) rounded px-2 py-1 cursor-pointer active:bg-(--c4)'
                    onClick={()=>{
                        console.log("Remove")
                        removeCollection(item)
                    }}
                >Remove</button>
            </div>
        
        </div>
    </div>

   
  )
}

export default CollectionCard
