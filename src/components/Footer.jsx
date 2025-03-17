import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsTelephone } from 'react-icons/bs'
import { MdLocationPin, MdMail } from 'react-icons/md'

export default function Footer() {

    return (
        <footer className='py-10 bg-stone-950'>
            <div className='flex flex-col items-center md:px-16 px-2 gap-5'>
                <h2 className='text-4xl font-semibold text-amber-700'>Disclaimer</h2>
                <p className='text-center'>Strike11 Sports Fantasy is an exciting and engaging fantasy sports platform, but please be aware that fantasy sports may be habit-forming and financially risky. Play responsibly. Strike11 Sports Fantasy is available only to users who are 18 years or older and legally permitted to participate. These services are not available in the states of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu, as the law in these states prohibits participation. Participation in Strike11 Sports Fantasy contests is governed by the terms and conditions outlined on the website, and we encourage users to review them before entering any contests.</p>
                <div className='flex gap-6 text-amber-600'>
                    <Link to={'/'}  className='hover:text-amber-800'>Home</Link>
                    <Link to={'/about'}  className='hover:text-amber-800'>About Us</Link>
                    <Link to={'/privacy'}  className='hover:text-amber-800'>Privacy Policy</Link>
                    <Link to={'/term&cond'}  className='hover:text-amber-800'>Term & Condition</Link>
                    <Link to={'/contact'}  className='hover:text-amber-800'>Contact Us</Link>
                </div>
                <p>© Strike11 Sports Fantasy 2025 All Rights Reserved.</p>
            </div>
        </footer>
    )
}
