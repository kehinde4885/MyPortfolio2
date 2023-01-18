import Photobox from "./Photobox2"
import Footer from "./Footer"

import Availaible from "./availaible"
import Nav from "./Nav"

import reactlogo from "./assets/react.svg"
import figma from "./assets/figma.svg"
import github from "./assets/github.svg"
import GS from "./assets/GS.svg"
import netlify from "./assets/netlify.svg"
import notion from "./assets/notion.svg"
import tailwind from "./assets/tailwind.svg"
import vite from "./assets/vitejs.svg"




function Info(){
    return (
    <main className='xl:col-span-6 lg:py-20 lg:flex lg:flex-col lg:justify-between lg:col-span-6 space-y-14 px-10 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-black2'>

        <Availaible/>
        
        <div className='space-y-16'>
            <h1 className="2xl:text-6xl lg:text-[4.8rem] md:text-6xl md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">the tech i use to build exceptional software.</h1>
            <div>
                <ul className="md:grid-cols-3 grid grid-cols-2 gap-8">
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2 text-white">
                        <img className="w-20 aspect-square" src={reactlogo} alt="" />
                        <p className="text-2xl text-white1">React</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={figma} alt="" />
                        <p className="text-2xl text-white1">Figma</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={github} alt="" />
                        <p className="text-2xl text-white1">Github</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={netlify} alt="" />
                        <p className="text-2xl text-white1">Netlify</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={GS} alt="" />
                        <p className="text-2xl text-white1">GreenSock</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={notion} alt="" />
                        <p className="text-2xl text-white1">Notion</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={tailwind} alt="" />
                        <p className="text-2xl text-white1">Tailwind</p>
                    </li>
                    <li className="px-10 py-16 flex flex-col justify-center items-center space-y-4 bg-black2">
                        <img className="w-20 aspect-square" src={vite} alt="" />
                        <p className="text-2xl text-white1">Vite</p>
                    </li>
                    
                </ul>
                
            </div>
        </div>

        <Nav page='tech' />
    </main>

    )
}


export default function Tech(){

    return (
        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>

    )

}