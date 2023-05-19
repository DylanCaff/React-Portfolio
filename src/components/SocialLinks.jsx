import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='felx justify-between items-center w-40 h-14 px-4 bg-black'>
                    <a
                        href='https://www.linkedin.com/in/dylan-cafferatta-4b8826260/'
                        className='flex justify-between items-center w-full text-white'
                    >
                        <>
                            LinkedIn <FaLinkedin size={30} />
                        </>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default SocialLinks