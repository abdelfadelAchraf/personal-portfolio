import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ // Corrected the assignment here
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { // Fixed email validation regex
            errors.email = "Email is not valid!";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_4mrl71f",
                "template_n7bmscs",
                formData,
                "f11-YMxEN3g4PAVum"
            )
            .then((response) => {
               // console.log("SUCCESS", response.status, response.text);
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
               // console.log("FAILED...", error);
                toast.error("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSending(false);
            });
        }
    };

    return (
        <section className='mx-auto max-w-3xl p-4' id='contact'>
            <Toaster />
            <motion.h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}>
                Let's connect
            </motion.h2>
            <motion.form onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}>
                <fieldset className='mb-4'>
                    <input type="text"
                        id='name'
                        name='name' // Added name attribute
                        value={formData.name}
                        placeholder='Name:'
                        onChange={handleChange}
                        className='mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-1 text-sm focus:outline-none' />
                    {errors.name && (
                        <p className='text-sm text-pink-700'> {errors.name}</p>
                    )}
                </fieldset>
                <fieldset className='mb-2'>
                    <input type="email"
                        id='email'
                        name='email' // Added name attribute
                        value={formData.email}
                        placeholder='Email:'
                        onChange={handleChange}
                        className='mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-1 text-sm focus:outline-none' />
                    {errors.email && (
                        <p className='text-sm text-pink-700'> {errors.email}</p>
                    )}
                </fieldset>
                <fieldset className='mb-4'>
                    <textarea
                        id='message'
                        name='message' // Added name attribute
                        value={formData.message}
                        placeholder='Message:'
                        onChange={handleChange}
                        className='mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:outline-none'
                        rows="8" wrap='soft' />
                    {errors.message && (
                        <p className='text-sm text-pink-700'> {errors.message}</p>
                    )}
                </fieldset>
                <button type='submit' className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-500
                    hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    {isSending ? "Sending..." : "Send"}
                </button>
            </motion.form>
        </section>
    );
};

export default Contact;
