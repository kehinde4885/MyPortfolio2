
import { useState } from "react"

export default function Form(){

    const [formData,changeFormData] = useState({
        name: '',
        email: '',
        service: ''
    })

    function handleChange(e){

        changeFormData(oldData => {
            return {...oldData , 
            [e.target.id] : e.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(formData)

        formReset()
        
    }
    

    function formReset(){
        changeFormData(oldData => {
            return {name: '', email:'', service: ''
            }
        })

    }

    return (

        <form onSubmit={handleSubmit} className="md:w-4/5 text-white space-y-8 pt-16">
            <h2 className="lg:text-[4.8rem] md:w-4/5  sm:text-[4.8rem] sm:leading-none uppercase text-3xl leading-snug font-sec text-white">Let us Work Together</h2>
            <div className="w-4/5 flex flex-col space-y-8 py-8 border-t-[1px] border-white">
                <label className="font-sec text-2xl tracking-tighter" htmlFor="name">What's Your Name?</label>
                <input onChange={handleChange} className="bg-transparent text-[1.5rem] border-0 focus:border-0 focus:ring-transparent" id="name" placeholder="Enter Name" type="text" value={formData.name} />
            </div>
            <div className="w-4/5 flex flex-col space-y-8 py-8 border-t-[1px] border-white">
                <label className="font-sec text-2xl tracking-tighter" htmlFor="email">What's Your Email?</label>
                <input onChange={handleChange} className="bg-transparent text-[1.5rem] border-0 focus:border-0 focus:ring-transparent" id="email" placeholder="Enter Email" type="text" value={formData.email} />
            </div>
            <div className="w-4/5 flex flex-col space-y-8 py-8 border-t-[1px] border-white">
                <label className="font-sec text-2xl tracking-tighter" htmlFor="service">What services are you looking for? </label>
                <textarea onChange={handleChange} className="h-32 bg-transparent text-[1.5rem] border-0 focus:border-0 focus:ring-transparent" id="service" placeholder="Enter Service" value={formData.service}></textarea>
            </div>
            <button className="p-10 bg-black2">Submit</button>
        </form>

    )
}