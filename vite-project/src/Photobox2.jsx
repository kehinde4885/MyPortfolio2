import React from 'react'

import head from './assets/head.svg'

export default function Photobox() {

    return (
    <div className='xl:col-span-2 lg:col-span-2 flex items-center justify-center bg-white'>
        <div className='lg:basis-full basis-1/4 py-10'>
            <img className='' src={head} alt="logo" />
        </div>
    </div>
    )
   
}






