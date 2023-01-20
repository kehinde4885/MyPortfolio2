import Photobox from "./Photobox2";
import Availaible from "./availaible";
import Footer from "./Footer";
import Nav from "./Nav";
import Form from "./Form";

import about from './assets/about.png'




function Info(){
    return (

        <main className='main-component'>
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

            <Form/>

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