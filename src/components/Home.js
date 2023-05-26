import React from 'react';
import HeroImage from '../assets/heroimage.jpeg';
import {TbArrowRightBar} from 'react-icons/tb';
import { Link } from "react-scroll";

const home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-emerald-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                   I'm a Full Stack Developer
                </h2>
                <p className=' text-white py-4 max-w-md'>
                I am an ambitious new developer enrolled in the Full Stack Development Bootcamp at Georgia Institute of Technology. I'm eagerly seeking opportunities to tackle challenges and enhance my skills. I'm particularly excited about working on diverse projects involving technologies like node.js, React, MySQL, and more. Continuously learning and adapting to new tools is what truly motivates me.
                </p>
                <div>
                <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-neutral-500 to-neutral-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRightBar size={25} className="ml-1" />
              </span>
            </Link>
                </div>

            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default home