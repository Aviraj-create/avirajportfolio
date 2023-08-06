import React from 'react'
import Hero from '../assets/heroImage.png'
import {ImArrowRight2} from 'react-icons/im'
import moduleName from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>   
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Frontend Developer 
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I am a final year Electronics and Communications Engineering student from NIT Patna.
                Interested in Web Development.
                Currently, I love to work on web applications using technologies like React, Tailwind, NextJS, MongoDB.
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                    Portfolio
                    <span className=' pl-[5px] group-hover:rotate-90 duration-300'> <ImArrowRight2 /> </span>
                </button>
            </div>
        </div>
        <div>
            <img src={Hero} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home