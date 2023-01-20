
import Photobox from "./Photobox"
import Footer from "./Footer"
import Availaible from "./availaible"
import Nav from "./Nav"


function Info(){
    return (
        

    <main className='home-main-component'>
        
        <Availaible/>
        
        <div className='md:w-4/5 space-y-16'>
            <h1 className='2xl:text-6xl lg:text-[4.8rem] md:text-6xl sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white'>I'm Nico van zyl - an interface architect.</h1>
            <p className='2xl:text-3xl 2xl:leading-snug md:min-w-fit sm:text-[2.4rem] text-2xl text-white2 leading-snug'>I work with technical founders, 
                startups and established product teams
                as your design-drivezn interface development partner and advisor.
            </p>
        </div>

        <Nav/>

     </main>

    )
}

export default function Home(){
    return(
        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>
    )
}