
import Photobox from "./Photobox"
import Footer from "./Footer"

function Info(){
    return (
    <main className='space-y-14 mx-10'>

        <div className='flex justify-between'>
        <p className='text-white1 uppercase text-2xl'>Hi There</p>
        <div className='flex flex-col text-white2 text-xl uppercase'>
            <p className='font-sec'>Currently Unavailable</p>
            <p>Available from APR, 2023</p>
        </div>
        </div>

        <div className='space-y-16'>
        <h1 className='uppercase text-3xl leading-snug font-sec text-white'>I'm Nico van zyl - an interface architect.</h1>
        <p className='text-2xl text-white2 leading-snug'>I work with technical founders, 
            startups and established product teams
            as your design-driven interface development partner and advisor.
        </p>
        </div>

        <nav className='text-white space-y-8'>
        <ul className='uppercase text-2xl space-y-10'>
            <li>about</li>
            <li>process</li>
            <li>portfolio</li>
            <li>tech</li>
        </ul>
        <ul className='flex space-x-8 text-[16px]'>
            <li><i class="fa-brands fa-dribbble"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-github"></i></li>
        </ul>
        </nav>

     </main>

    )

}

export default function Home(){

    return(
        <div className="space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>
    )
}