import React, { useState } from 'react'
import toast, { Toaster, useToaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const [errors, setErrors] = useState({});

    const [isSending , setIsSending] = useState(false);

    const handleChange =(e)=>{
        const {name ,value} = e.target;
        setFormData =({
            ...formData,
            [name]:value,
        })
    }

    const validate =()=>{
        let errors = {};
        if(!FormData.name) errors.name = "Name is required";
        if(!formData.email){
            errors.email = "Email is required";
        }else if(!/\$+@\.\$+/.test(formData.email)){
            errors.email = "Email is not valid !";
        }
        if(!formData.message){
            errors.message = "Message is required ";
        }
        return errors;
    }


    const handlesubmit =(e)=>{
         e.preventDefault();
         const validationErrors = validate();
         if(Object.keys(validationErrors).length > 0 ){
            setErrors(validationErrors);
         }else{
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_4mrl71f",
                "template_n7bmscs",
                formData,
                "f11-YMxEN3g4PAVum"
            )
            .then((response) =>{
                console.log("SUCCESS", response.status, response.text);
                toast.success("Message sent successfully");
                setFormData({  name:"", email:"", message:"" });
            }) .catch((error) =>{
                    console.log("FAILED...", error);
                    toast.error("failed to send messgae. Please try again")
            })
            .finally(()=>{
                setIsSending(false);
            })
         }
    }
  return (
   <section className='mx-auto max-w-3xl p-4' id='contact'>
     <Toaster/>
     <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
        Let's connect
     </h2>
     <form onSubmit={handlesubmit}>
        <fieldset className='mb-4'>
            <input type="text" 
            id='name' 
            value={formData.name} 
            placeholder='Name:'
            onChange={handleChange}
            className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-9 py-2 text-sm focus:outline-none'/>
            {errors.name && (
                <p className='text-sm text-pink-700'> {errors.name}</p>
            )}
        </fieldset>
        <fieldset className='mb-4'>
            <input type="email" 
            id='email' 
            value={formData.email} 
            placeholder='Email:'
            onChange={handleChange}
            className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-9 py-2 text-sm focus:outline-none'/>
            {errors.email && (
                <p className='text-sm text-pink-700'> {errors.email}</p>
            )}
        </fieldset>
        <fieldset className='mb-4'>
            <textarea
            id='message' 
            value={formData.message} 
            placeholder='Message:'
            onChange={handleChange}
            className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-9 py-2 text-sm focus:outline-none'
            rows="8" wrap='soft' />
            {errors.message && (
                <p className='text-sm text-pink-700'> {errors.message}</p>
            )}
        </fieldset>
        <button type='submit' className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-500
             hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" :""}`} disabled={isSending}>{isSending ? "Sending...": "Send"}</button>
     </form>
   </section>
  )
}

export default Contact