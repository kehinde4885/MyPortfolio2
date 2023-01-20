import { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav(props){

    const [state,changeState] = useState(props.page)

    return (
        <nav className='md:flex md:justify-between md:space-y-0 md:items-center text-white space-y-8 pt-24'>
            <ul className='md:w-4/5 md:justify-between sm:gap-y-6 sm:flex sm:space-y-0 sm:flex-wrap uppercase text-2xl space-y-10'>
                {state === 'contact' ? '' :<li className="md:basis-auto  basis-1/3"><Link to="/contact">contact</Link></li>}
                {state === 'process' ? '' :<li className="md:basis-auto  basis-1/3"><Link to="/process">process</Link></li>}
                {state === 'portfolio' ? '' :<li className="md:basis-auto  basis-1/3"><Link to="/portfolio">portfolio</Link></li>}
                {state === 'tech' ? '' :<li className="md:basis-auto  basis-1/3"><Link to="/tech">tech</Link></li>}
            </ul>
            <ul className='flex space-x-8 text-[16px]'>
                <li><a href='https://www.linkedin.com/in/kehindemalagu/'><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href='https://twitter.com/KehindeTM'><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href='https://github.com/kehinde4885'><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </nav>
    )
}
