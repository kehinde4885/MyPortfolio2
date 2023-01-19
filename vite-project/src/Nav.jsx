import { useState } from "react"

export default function Nav(props){

    const [state,changeState] = useState(props.page)


    return (
        <nav className='md:flex md:justify-between md:space-y-0 md:items-center text-white space-y-8 pt-24'>
            <ul className='md:w-4/5 md:justify-between sm:gap-y-6 sm:flex sm:space-y-0 sm:flex-wrap uppercase text-2xl space-y-10'>
                {state === 'contact' ? '' :<li className="md:basis-auto  basis-1/3">contact</li>}
                {state === 'process' ? '' :<li className="md:basis-auto  basis-1/3">process</li>}
                {state === 'portfolio' ? '' :<li className="md:basis-auto  basis-1/3">portfolio</li>}
                {state === 'tech' ? '' :<li className="md:basis-auto  basis-1/3">tech</li>}
            </ul>
            <ul className='flex space-x-8 text-[16px]'>
                <li><i className="fa-brands fa-dribbble"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-github"></i></li>
            </ul>
        </nav>
    )


}