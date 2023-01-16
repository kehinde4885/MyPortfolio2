
import Photobox from "./Photobox"
import Footer from "./Footer"

function Info(){
    return (
        
    <main className='xl:col-span-5 lg:py-20 lg:flex lg:flex-col lg:justify-between lg:col-span-6 space-y-14 px-10 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-black3'>
        <div className='flex justify-between'>
            <p className='flex text-white1 uppercase text-2xl'>
                <span>Hi</span>
                <span className="sm: hidden">There</span>
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
            <h1 className='2xl:text-6xl lg:text-[4.8rem] md:text-6xl sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white'>I'm Nico van zyl - an interface architect.</h1>
            <p className='2xl:text-3xl 2xl:leading-snug md:min-w-fit sm:text-[2.4rem] text-2xl text-white2 leading-snug'>I work with technical founders, 
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
        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox/>
            <Info/>
            <Footer/>
        </div>
    )
}
