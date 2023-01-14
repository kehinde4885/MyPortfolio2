
import Photobox from "./Photobox"
import Footer from "./Footer"

function Info(){
    return (
    <main className='space-y-14 mx-10'>

        <div className='flex justify-between'>
            <p className='text-white1 uppercase text-2xl'>
                <span>Hi</span>
                <span className="hidden">There</span>
                <span>🙋‍♂️</span>
            </p>
            <div className='md:text-xl flex flex-col text-white2 text-xlg uppercase space-y-2'>
                <p className='font-sec flex items-center space-x-2'>
                    <span className="indicator h-5 w-5 rounded-full bg-red-800"></span>
                    <span className="sm:flex hidden">Currently</span>
                    <span>Unavailable</span>
                </p>
                <p className="flex space-x-2">
                    <span className="sm:block hidden">Available</span>
                    <span> from APR, 2023</span>
                </p>
            </div>
        </div>


        <div className='md:w-4/5 space-y-16'>
            <h1 className='md:text-6xl sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white'>I'm Nico van zyl - an interface architect.</h1>
            <p className='md:min-w-fit sm:text-[2.4rem] text-2xl text-white2 leading-snug'>I work with technical founders, 
                startups and established product teams
                as your design-driven interface development partner and advisor.
            </p>
        </div>

        <nav className='md:flex md:justify-between md:space-y-0 md:items-center text-white space-y-8'>
            <ul className='md:w-4/5 md:justify-between sm:gap-y-6 sm:flex sm:space-y-0 sm:flex-wrap uppercase text-2xl space-y-10'>
                <li className="md:basis-auto  basis-1/3">about</li>
                <li className="md:basis-auto  basis-1/3">process</li>
                <li className="md:basis-auto  basis-1/3">portfolio</li>
                <li className="md:basis-auto  basis-1/3">tech</li>
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
        <div className="lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>
    )
}
