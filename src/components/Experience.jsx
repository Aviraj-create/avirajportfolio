import React from 'react';
import Html from '../assets/html.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Reactimg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Next from '../assets/nextjs.png'
import Node from '../assets/node.png'
import Java from '../assets/java.png'
import MongoDB from '../assets/mongo.png'

const Experience = () => {
    const techs=[
        {
            id:4,
            src:Html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:Reactimg,
            title:'ReactJS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:Tailwind,
            title:'Tailwindcss',
            style:'shadow-blue-400'
        },
        {
            id:1,
            src:Java,
            title:'Java',
            style:'shadow-orange-700'
        },
        {
            id:4,
            src:Javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:7,
            src:Node,
            title:'NodeJS',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:Next,
            title:'NextJS',
            style:'shadow-white'
        },
        {
            id:8,
            src:MongoDB,
            title:'MongoDB',
            style:'shadow-green-700'
        },
        {
            id:5,
            src:Github,
            title:'Github',
            style:'shadow-gray-500'
        },
        
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'> 
       <div className='nax-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies i've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style})=>
                (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p>
                        {title}
                    </p>
                </div>
                ))
            }
            
        </div>
       </div>
    </div>
  )
}

export default Experience