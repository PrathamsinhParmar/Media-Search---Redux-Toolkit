import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)    // Select the current tab, Here search is the slicename

  return (
    <div id='tabContainer' className='flex gap-10 px-10 py-2'>
      {tabs.map((elem, idx)=>{
        return <button key={idx}
            className={`${(activeTab==elem) ? 'bg-(--c3)':'bg-gray-700'} transition-all uppercase border-none px-4 py-2 rounded cursor-pointer text-xs`}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
        >{elem}</button>
      })}
    </div>
  )
}

export default Tabs
