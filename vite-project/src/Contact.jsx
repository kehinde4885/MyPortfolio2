import Photobox from "./Photobox2";
import Availaible from "./availaible";
import Footer from "./Footer";
import Nav from "./Nav";

import about from './assets/about.png'


function Info(){
    return (

        <main className='xl:col-span-6 lg:py-20 lg:flex lg:flex-col lg:justify-between lg:col-span-6 space-y-14 px-10 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-black2'>
            <Availaible/>

            <div className='md:w-4/5 space-y-16'>
                <h1 className="2xl:text-6xl lg:text-[4.8rem] md:text-6xl md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">a one-man design & development studio.</h1>
                
            </div>

            <div className="md:w-4/5 text-white">
                <div className="lg:flex-col sm:flex sm:flex-row sm:items-center flex flex-col bg-black2 box-content px-12 py-8 space-y-12">
                    <img className="sm:w-1/4 w-4/5" src={about} alt="" />
                    <p className="sm:text-[2.4rem] text-2xl font-sec leading-normal">I partner with technical founders and product teams to make a measurable impact and take companies to the next level, 
                    I have a passion for creating exceptional interfaces, applications, and tools including design systems, 
                    Jamstack websites and PWAs.
                    </p>
                </div>

            </div>

            <form className="text-white">
                <h2 className="lg:text-[4.8rem] md:text-6xl md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">Let us Work Together</h2>
                <div className="flex flex-col space-y-8 py-8 border-t-[1px] border-white">
                    <label className="font-sec text-2xl tracking-tighter" htmlFor="name">What's Your Name?</label>
                    <input className="bg-transparent text-[1.5rem] focus:border-0 focus:ring-transparent" id="name" placeholder="Enter Name" type="text" />
                </div>
            </form>


            <Nav page='contact' />

        </main>

    )
}




export default function About(){

    return (

        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox />
            <Info/>
            <Footer/>
        </div>

    )
}