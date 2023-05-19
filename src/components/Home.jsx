import React from 'react'
import HeroImage from '../assets/heroimage.jpeg'
import {TbArrowRightBar} from 'react-icons/tb'

const home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-emerald to-emerald-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                   I'm a Full Stack Developer
                </h2>
                <p className=' text-white py-4 max-w-md'>
                   I am a new developer ready for any challenge thrown my way.
                   I'm currently completeing a Full Stack Devolpment Bootcamp for Georgia Institute of Technology.
                   I love to work on projects with different types of technologies like node.js, React, MySQL, and many more! 
                </p>
                <div>
                    <button className=' group font-bold text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-neutral-500 to-neutral-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <TbArrowRightBar size={20} 
                        className='ml-1' />
                        </span>
                    </button>
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