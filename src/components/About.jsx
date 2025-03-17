import React from 'react'

const About = () => {
  return (
    <div className='min-h-[60vh] bg-black px-2'>
      <div className='flex flex-col gap-6 justify-center items-center py-16'>
        <h2 className='text-5xl font-bold text-amber-700'>Overview</h2>
        <div className='md:mx-32 flex flex-col gap-6 text-lg pt-8'>
            <p className='font-semibold text-center text-2xl'>Strike11 Fantasy Sport is an innovative and legally compliant fantasy sports platform that allows users to create virtual teams, compete in contests, and win real rewards.</p>
            <p className='pt-8'>We aim to provide an engaging and fair gaming experience where skill, strategy, and sports knowledge play a crucial role. Our platform is designed to ensure a transparent and responsible gaming environment for all users.</p>
            <p className=''>With a user-friendly interface, real-time updates, and a variety of contests, Strike11 Fantasy Sport is the ultimate destination for fantasy sports enthusiasts in India. Whether you are a beginner or an expert, our platform offers an exciting way to enjoy sports while testing your strategic skills.</p>
        </div>
      </div>
    </div>
  )
}

export default About
