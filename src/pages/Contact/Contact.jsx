import React, { useContext, useRef, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdLocationPin, MdMail } from "react-icons/md";
import { motion, useInView } from 'framer-motion'
import Layout from '../../components/Layout';


const Contact = () => {
    const ref = useRef()

    const [userData, setUserData] = useState(
        {
            Name: '', Email: '', Message: ''
        }
    )

    let name, value
    const data = (e) => {
        name = e.target.name
        value = e.target.value
        setUserData({ ...userData, [name]: value })
    }


    return (
        <Layout>
            <section className="" id="contact" style={{ backgroundColor: 'rgb(11, 11, 11)' }}>
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 hidden sm:block"
                >
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-white  text-3xl sm:text-5xl" >
                                Get in <span className='text-amber-700'>Touch</span>
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2"
                        
                        >
                            <div className="h-full pr-6"
                            
                            >
                                <p className="mt-3 mb-12 text-lg text-gray-100 "
                                
                                >
                                    Feel free to reach out to us with any inquiries,
                                    feedback, or concerns. Your communication is important to us, and we aim to respond promptly to assist you.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex"
                                    
                                    >
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Customer Support
                                            </h3>
                                            <p className="text-gray-100 ">Our support team is available 24/7 to address any inquiries regarding account issues, payments, withdrawals, contests, or any other assistance you may need.</p>
                                        </div>
                                    </li>
                                    <li className="flex"
                                    
                                    >
                                        
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Feedback & Suggestions
                                            </h3>
                                            <p className="text-gray-100 ">We value your input! Share your thoughts on how we can enhance your fantasy sports experience.</p>
                                        </div>
                                    </li>
                                    <li className="flex mt-5 "
                                    
                                    >
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Frequently Asked Questions (FAQ)</h3>
                                            <p className="text-gray-100 ">Before reaching out, check our FAQ section for answers to common queries about our platform, transactions, and rules.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form"
                            
                            >
                                <h2 className="mb-4 text-2xl font-bold text-white" >Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4 text-black">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" value={userData.Name} onChange={data} id="name" autoComplete="off" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Name" />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" value={userData.Email} onChange={data} id="email" autoComplete="off" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Email" />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4 text-black">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" value={userData.Message} onChange={data} name="Message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile view */}
                <section className="bg-stone-100 sm:hidden" id="contact" style={{ backgroundColor: 'rgb(11, 11, 11)' }}>
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                <h2
                                    className="font-heading mb-4 font-bold tracking-tight text-white  text-3xl sm:text-5xl" >
                                    Get in <span className='text-amber-700'>Touch</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">
                                    <p className="mt-3 mb-12 text-lg text-gray-100 ">
                                        Feel free to reach out to us with any inquiries, feedback, or concerns.
                                        Your communication is important to us, and we aim to respond promptly to assist you.
                                    </p>
                                    <ul className="mb-6 md:mb-0">
                                        <li className="flex"

                                        >
                                            
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Customer Support
                                                </h3>
                                                <p className="text-gray-100 ">Our support team is available 24/7 to address any inquiries regarding account issues, payments, withdrawals, contests, or any other assistance you may need.</p>
                                                <p className="text-gray-100 ">Adityapur, Jamshedpur, Jharkhand 831014</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                          
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Feedback & Suggestions
                                                </h3>
                                                <p className="text-gray-100 ">We value your input! Share your thoughts on how we can enhance your fantasy sports experience.</p>
                                            </div>
                                        </li>
                                        <li className="flex mt-5 ">
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Frequently Asked Questions (FAQ)</h3>
                                                <p className="text-gray-100 ">Before reaching out, check our FAQ section for answers to common queries about our platform, transactions, and rules.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                    <h2 className="mb-4 text-2xl font-bold text-white" >Ready to Get Started?</h2>
                                    <form id="contactForm">
                                        <div className="mb-6">
                                            <div className="mx-0 mb-1 sm:mb-4 text-black">
                                                <div className="mx-0 mb-1 sm:mb-4 " >
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" value={userData.Name} onChange={data} autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Name" />
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" value={userData.Email} onChange={data} autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Email" />
                                                </div>
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4 text-black">
                                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" value={userData.Message} onChange={data} name="Message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Contact
