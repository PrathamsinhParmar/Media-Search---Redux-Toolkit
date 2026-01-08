import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoes, fetchVideos, fetchGIFS } from '../api/mediaApi'
import { setResults, setError, setLoading } from '../redux/features/searchSlice'

import React, { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if(!query) return    // IMPORTANT
        const getData = async () => {
            try {

                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotoes(query)
                    console.log(response)
                    data = response.data.results.map((item, idx) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.thumb,
                        src: item.urls.full,
                        url: item.links.html,
                        download_url : item.links.download
                    }))
                }

                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    console.log(response)
                    data = response.data.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                    console.log(data)
                }

                if (activeTab == 'gif') {
                    let response = await fetchGIFS(query)
                    console.log(response)
                    data = response.data.results.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        // title: item.content_description,
                        title:item.title,
                        thumbnail: item.media_formats.gif.url,
                        src: item.media_formats.mp4.url,
                        url: item.url,
                        download_url : item.media_formats.mp4.url

                    }))
                    // console.log(data)
                }
                dispatch(setResults(data))
            }
            catch (err) {
                dispatch(setError(err.message))    // IMPORTANT
            }
        }
        getData()

    }, [query, activeTab, dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

    return (
        <div id='cardContainer' className=' flex flex-wrap gap-5 px-10 py-5 w-full justify-between overflow-auto '>
            {results.map((item, idx)=>{
                 return (
                    <div key={idx} >
                      
                         <ResultCard item={item}/>

                    </div>
                 )
            })}
        </div>
    )
}

export default ResultGrid
