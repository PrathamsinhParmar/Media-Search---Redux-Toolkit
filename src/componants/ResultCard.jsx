import React from 'react'
import { useDispatch } from 'react-redux'
import { addedToast, addToCollection } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()


    const addCollection = (item)=>{
        // console.log("Hui Hui")
        dispatch(addToCollection(item))
         dispatch(addedToast(item))
    }


    return (
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
                        addCollection(item)
                    }}
                >Save</button>
            </div>
        
        </div>
    )
}

export default ResultCard
