
import Photobox from "./Photobox2"
import Footer from "./Footer"
import Availaible from "./availaible"
import process from "./assets/process.svg"



function Info(){
    return (

    <main className='xl:col-span-6 lg:py-20 lg:flex lg:flex-col lg:justify-between lg:col-span-6 space-y-14 px-10 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-black2'>
        <Availaible/>

        <div className='space-y-16'>
            <h1 className="2xl:text-6xl lg:text-[4.8rem] md:text-6xl md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">The process towards exceptional work.</h1>
        </div>

        <ul className="pt-24">
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['01.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:translate-x-[-50%] before:left-0 ">Identifying the Problem</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                        Technical founders and non-design 
                        led product teams often find themselves
                        building soulless, inconsistent and incoherent
                        user interfaces for otherwise great solutions
                        and software that deserve an interface and user 
                        experience that will make it exceptional.
                    </p>
                    <div className="lg:flex-col sm:flex sm:flex-row sm:items-center flex flex-col bg-black2 box-content px-12 py-8 space-y-12">
                        <p className="sm:text-[2.4rem] text-2xl font-sec leading-normal">I help bring order to chaos and execute
                            your ideas. Enabling you to launch, scale and grow
                            your buisness with a thorough process and swift execution
                        </p>
                        <img className="sm:w-1/4 w-4/5" src={process} alt="" />
                    </div>
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">There comes a point in the lifecycle of a project where the
                        team realise the design and user experience isnt up to scratch and they 
                        need to find and hire either an agency or go through the 
                        process of building their own design and front-end development team,
                        both of which can quickly become unnnecessarily expensive 
                        for small to medium companies.
                    </p>
                </div>
            </li>
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['02.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:left-0 before:translate-x-[-50%]">Introduction</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                    In order to execute the perfect plan I need to understand the ins and outs of the business, 
                    the problems it's helping fix and the solution to those problems. 
                    This is why I have an emphasis on partnering with clients, 
                    I apply myself completely to the project and focus on a single project for the total duration of the sprints. 
                    You can think of me as your user interface design & development co-founder.
                    </p>
                </div>
            </li>
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['03.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:left-0 before:translate-x-[-50%]">Planning & Roadmap</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                        This basically means getting all the ideas out in the open and getting it 
                        all on paper, so to say. Creating a high -level roadmap, userflows and low-fidelity 
                        wireframes help dive deep into the problems, solutions and obstacles.
                    </p>
                </div>
            </li>
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['04.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:left-0 before:translate-x-[-50%]">Design, Prototype & Build</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                    The best solutions come from iteration. 
                    To achieve this, ideas need to be implemented and tested swiftly. 
                    This is why prototyping is really important. 
                    I design and prototype using production-ready code as early in the development process as possible with a tight feedback loop, 
                    this avoids duplicate work from the traditional process of creating static designs and then recreating them in code afterwards. 
                    There's an infamous saying of move fast and break stuff, I prefer move fast and ship quickly.
                    </p>
                </div>
            </li>
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['05.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:left-0 before:translate-x-[-50%]">Handover, Deploy & Launch</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                    You own all your code, once the project is ready to launch 
                    I'll handover the code and any other assets and 
                    help you with the deployment process and write any documentation required.
                    </p>
                </div>
            </li>
            <li className="text-white">
                <h2 className="md:text-[3.6rem] text-2xl font-sec px-12 relative before:content-['06.'] before:text-xl before:md:text-[2.4rem] before:text-grey2 before:font-sec before:absolute before:left-0 before:translate-x-[-50%]">Improve & Ongoing Support</h2>
                <div className="border-l-4 border-grey1 px-12 py-16 space-y-8">
                    <p className="2xl:text-3xl sm:text-[2.4rem] text-white2 text-2xl leading-normal">
                    Let's face it, software needs to constantly be improved and evolve with the times, 
                    after project handover I work with you and your team to build on the existing work to add any new features and changes. 
                    Since everything is built to scale from the ground-up, these costs are drastically lower and are faster to implement and ship.
                    </p>
                </div>
            </li>
        </ul>

    </main>

    )
}


export default function Process(){
    return (

        <div className="lg:space-y-0 lg:h-screen lg:grid lg:grid-cols-10 Home space-y-16">
            <Photobox />
            <Info/>
            <Footer/>
        </div>
        
    )
}