import React from 'react'
import AniMatch from '../assets/portfolio/AniMatch.png'
import NoteTaker from '../assets/portfolio/NoteTaker.png'
import PJBooks from '../assets/portfolio/PJBooks.png'
import PasswordGenerator from '../assets/portfolio/PasswordGenerator.png'
import TextEditor from '../assets/portfolio/TextEditor.png'



const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: AniMatch,
            url: 'https://animatch.herokuapp.com/',
            codeUrl: 'https://github.com/BJThompson12/Heroku-Heroes'

        },
        {
            id: 2,
            src: NoteTaker,
            url: 'https://note-taker442.herokuapp.com/',
            codeUrl: 'https://github.com/DylanCaff/Note-Taker'
        },
        {
            id: 3,
            src: PJBooks,
            url: 'https://michaelmees99.github.io/PJ-Coders-Project1/',
            codeUrl: 'https://github.com/MichaelMees99/PJ-Coders-Project1'
        },
        {
            id: 4,
            src: PasswordGenerator,
            url: 'https://dylancaff.github.io/Password-gen/',
            codeUrl: 'https://github.com/DylanCaff/Password-gen'
        },
        {
            id: 5,
            src: TextEditor,
            url: 'https://text-editor6322.herokuapp.com/',
            codeUrl: 'https://github.com/DylanCaff/19-Text-Editor'
        },
    ];

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-emerald-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, url, codeUrl }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">

                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                                onClick={() => openLinkInNewTab(url)}
                                >
                                    Website
                                </button>
                                <button key={codeUrl} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                onClick={() => openLinkInNewTab(codeUrl)}
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;