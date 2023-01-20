
import Photobox from "./Photobox2";
import Availaible from "./availaible";
import Footer from "./Footer";
import { projects } from "./Projects";

import Nav from "./Nav"


let projectList = projects.map((project,index) => {
    return (
        <li key={index} className="lg:p-16 text-white text-2xl flex flex-col space-y-8 bg-black2 p-8">
            <h2 className="md:text-[2.4rem]">{project.title}</h2>
            <p className="text-white2 leading-normal">{project.desc}</p>
            <a href='https://google.com'>Visit</a>
        </li>
    )
})



function Info(){
    return (
        <main className='main-component'>
            <Availaible/>

            <div className='md:w-4/5 space-y-16'>
                <h1 className="2xl:text-6xl lg:text-[4.8rem] md:text-6xl md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">Selected Works</h1>
                <p className='2xl:text-3xl 2xl:leading-snug md:min-w-fit sm:text-[2.4rem] text-2xl text-white2 leading-snug'>I focus on creating beautiful software
                    that makes buisness sense, I only take on
                    a handful of projects each year, and make sure every project
                    is impactful
                </p>
            </div>


            <div>
                <ul className="xl:w-4/5 xl:grid-cols-1 sm:grid-cols-2 grid gap-8 projects">
                    {projectList}
                </ul>
            </div>

            <Nav page='portfolio' />

        </main>
    )
}

export default function Portfolio(){
    return (
        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>
        
    )

}