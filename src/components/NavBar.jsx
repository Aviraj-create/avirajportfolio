import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-scroll";


const languages = [
    'Aviraj',         // English
    'अविराज',  
    'అవిరాజ్',         // Hindi
    'অভিরাজ',         // Bengali
    'ಅವಿರಾಜ್',         // Kannada
    'અવિરાજ',         // Gujarati
    'ଅବିରାଜ',         // Odia
    'ਅਵਿਰਾਜ',         // Punjabi
    'அவிராஜ்',         // Tamil
          
    'അവിരാജ്',         // Malayalam
    'અવિરાજ્',         // Marathi
    'ਅਵਿਰਾਜ',         // Bengali
    'ଅଭିରାଜ',         // Odia
    'ಅವಿರಾಜ್',         // Kannada
    'అవిరాజ',         // Telugu
];
const transitionDuration = 3000; // Adjust the transition duration in milliseconds

const NavBar = () => {
    const [currentNameIndex, setCurrentNameIndex] = useState(0);
    const [nav,setNav]=useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, transitionDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
            <div className='w-[200px]'>
                <h1 className='text-5xl font-india'>
                    {languages.map((name, index) => (
                        <span
                            key={index}
                            className={`transition-opacity duration-${transitionDuration} ${currentNameIndex === index ? 'opacity-300' : 'opacity-0 absolute'
                                }`}
                        >
                            {name}
                        </span>
                    ))}
                </h1>
            </div>
            <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 absolute  right-0 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
       
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;