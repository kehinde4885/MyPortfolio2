
import { Link } from "react-router-dom"
export default function Availaible(){


    return (
        <div className='flex justify-between'>
            <Link to='/'>
            <p className='flex text-white1 uppercase text-2xl space-x-2'>
                <span>Hi</span>
                <span className="sm:flex hidden">There</span>
                <span>🙋‍♂️</span>
            </p>
            </Link>
            <div className='md:text-xl flex flex-col text-white2 text-xlg uppercase space-y-2'>
                <p className='font-sec flex items-center space-x-2'>
                    <span className="indicator h-5 w-5 rounded-full bg-green-800"></span>
                    <span className="sm:flex hidden font-bold">Currently</span>
                    <span>available</span>
                </p>
                <p className="hidden flex space-x-2">
                    <span className="sm:block hidden">Available</span>
                    <span> from APR, 2023</span>
                </p>
            </div>
        </div>
    )
}
