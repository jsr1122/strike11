import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  let {pathname} = useLocation()
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage)

  function Linkness (type = null) {
    if(subpage === ''){
      subpage = 'home'
    }
    let classes = 'text-sm font-medium text-white hover:text-amber-700 '

    if(type === subpage){
      classes += ' border-b-2 border-amber-700 p-2'
    }
    else{
      classes += ' text-white'
    }

    // console.log(classes)
    return classes
  }
  
  

  return (
    <div className="bg-black  sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flex flex-col w-full uppercase justify-center items-center space-y-8 my-5">
                    <Link to={'/'} className={Linkness('home')}>
                      HOME
                    </Link>
                    <Link to={'/about'} className={Linkness('about')}>
                      ABOUT US
                    </Link>
                    <Link to={'/fantasy'} className={Linkness('fantasy')}>
                      Fantasy Cricket
                    </Link>
                    <Link to={'/term&cond'} className={Linkness('term&cond')}>
                      Terms & Conditions
                    </Link>
                    <Link to={'/privacy'} className={Linkness('privacy')}>
                      Privacy Policy
                    </Link>
                    <Link to={'/contact'} className={Linkness('contact')}>
                      CONTACT US
                    </Link>
                  </div>
                  <div className="flex gap-5 items-center justify-center pt-10">
                    <a href="https://www.instagram.com/team.daksh/" target='_blank' className='xl:w-12 hover:text-amber-700'><BsInstagram size={25} /></a>
                    <a href="https://www.facebook.com/teamdaksh.nitjsr/" target='_blank' className='xl:w-12 hover:text-amber-700'><BsFacebook size={25} /></a>
                    <a href="https://in.linkedin.com/company/teamdaksh" target='_blank' className='xl:w-12 hover:text-amber-700'><BsLinkedin size={25} /></a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative h-36"
          
      >
        {/* <p className="flex h-5 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav aria-label="Top" className="h-full px-4 sm:px-6 lg:px-8 shadow-xl ">
          <div className="">
            <div className="flex h-36 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-black p-2 text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="flex justify-between w-full">
                <div className="ml-4 flex lg:ml-0 sm:w-auto w-full">
                  <Link to={'/'} className='flex w-full'>
                    <div className="flex w-full justify-center mr-[5vw]"
                      initial={{opacity:0,x:-200}}
                      animate={{opacity:1,x:0}}
                      transition={{duration:0.5,delay:0.8}}
                    >
                      <Link className=' text-2xl font-bold text-white  px-16 py-1 rounded'><img src="/logo2.png" className='w-28 sm:w-32 ' alt="" /></Link>
                    </div>
                  </Link>
                </div>

                {/* <div className="ml-auto flex items-center"> */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center uppercase justify-end xl:space-x-8 lg:space-x-6"
                  initial={{opacity:0,x:500}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:0.5,delay:0.8}}
                >

                  <Link to={'/'} className={Linkness('home')}>
                    HOME
                  </Link>
                  <Link to={'/about'} className={Linkness('about')}>
                    ABOUT US
                  </Link>
                  <Link to={'/fantasy'} className={Linkness('fantasy')}>
                    Fantasy Cricket
                  </Link>
                  <Link to={'/term&cond'} className={Linkness('term&cond')}>
                    Terms & Conditions
                  </Link>
                  <Link to={'/privacy'} className={Linkness('privacy')}>
                    Privacy Policy
                  </Link>
                  <Link to={'/contact'} className={Linkness('contact')}>
                    CONTACT US
                  </Link>

                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </header>
    </div >
  )
}