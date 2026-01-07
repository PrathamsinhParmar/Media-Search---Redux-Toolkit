import React from 'react'
import heroImage from '../assects/MediaSearch Hero Image.png'

const About = () => {
    return (
        <div className='h-screen w-full p-5 items-center capitalize'>
            <div className='w-70 font-bold text-2xl h-18 text-white mx-5 my-4 mb-5'>
                <h1 id='gradient-text'>Discover. Search. Save.<br />
                    All Media in One Place.</h1>
            </div>

            <div className='p-3 mb-10'>
                <img src={heroImage} alt="" />
            </div>

            <div className='mb-15 mx-2 capitalize'>
                <h2 id='gradient-text' className='text-3xl font-semibold mb-2'>About SearchMedia</h2>
                <p className='text-justify mb-3 font-semibold'>"MediaSearch is a modern media discovery platform inspired by Pinterest,
                    designed to help users search and explore photos, videos, and GIFs from across the web."
                </p>
                <p className='text-justify mb-3 font-semibold'>Whether you're a content creator, designer, student, or just exploring ideas,
                    MediaSearch makes it easy to find visually rich content for any topic in seconds.</p>
            </div>

            <div  className='mb-15 mx-2 capitalize'>
                <h2 id='gradient-text' className='text-3xl font-semibold mb-2'>What You Can Do with MediaSearch</h2>
                <ul className='list-decimal mx-4 text-justify font-semibold'>
                    <li>Search photos, videos, and GIFs by keywords</li>
                    <li>Explore trending and popular media</li>
                    <li>Discover inspiration for designs, presentations, and social media</li>
                    <li>View high-quality visuals from multiple sources</li>
                    <li>Enjoy a clean, fast, and responsive interface</li>
                </ul>
            </div>


            <div className='mb-15 mx-2 capitalize'>
                <h2 id='gradient-text' className='text-3xl font-semibold mb-2'>Who Is MediaSearch For ?</h2>
                <span className='text-xl font-semibold'>MediaSearch is perfect for:</span>
                <ul className='list-disc mx-4 text-justify font-semibold'>
                    <li>Content creators and YouTubers</li>
                    <li>Designers and developers</li>
                    <li>Students and educators</li>
                    <li>Social media managers</li>
                    <li>Anyone looking for visual inspiration</li>
                </ul>
            </div>


            <div className='mb-15 mx-2 capitalize'>
                <h2 id='gradient-text' className='text-3xl font-semibold mb-2 '>Technology Behind MediaSearch</h2>
                <span className='text-xl font-semibold text-justify'>MediaSearch is built using modern web technologies to ensure performance and scalability.</span>
                <ul className='list-disc mx-4 text-justify font-semibold'>
                    <li>Frontend: React Js</li>
                    <li>Styling: Tailwind CSS</li>
                    <li>Media APIs: Photos, Videos & GIF APIs</li>
                    <li>Responsive design for all devices</li>
                    <li>Optimized search and loading performance</li>
                </ul>
            </div>

            {/* <div className=' mx-2'>
                <h1 className='capitalize font-semibold mb-2 text-justify'>Our vision is to make MediaSearch the go-to platform for discovering visual content.</h1>
            </div> */}

        </div>
    )
}

export default About
