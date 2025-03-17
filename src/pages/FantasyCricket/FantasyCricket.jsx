import React from 'react'
import Layout from '../../components/Layout'

const FantasyCricket = () => {
    return (
        <Layout>
            <div className='flex flex-col gap-6 md:mx-24 mx-2 my-20'>
                <h2 className='text-5xl font-semibold text-center pb-10'>Fantasy Cricket - <span className='text-amber-700'>Strike11 Fantasy Sports</span></h2>

                <p className='text-center text-xl pb-10 pt-3'>Join the excitement of Fantasy Cricket and showcase your skills.</p>
                <div className='flex flex-wrap items-center justify-center gap-12 gap-x-16'>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col gap-3'>
                        <h2 className='font-medium text-lg'>What is Fantasy Cricket?</h2>
                        <p>Fantasy Cricket is an online strategy-based game where users create virtual teams using real players. Points are based on actual match performances.</p>
                    </div>
                    <div className='w-1/3 h-44 bg-white/10 px-12 justify-center items-start rounded-xl flex flex-col  gap-3'>
                        <h2 className='font-medium text-lg'>How to Play?</h2>
                        <p>Choose a match, create your team, join contests, track performance, and win rewards.</p>
                    </div>
                </div>

                <div className='bg-white/10 mt-10 rounded-2xl p-8 flex flex-col justify-center items-center text-lg gap-8'>
                    <p className='text-3xl font-semibold'>Responsible Gaming Guidelines</p>
                    <p className='text-gray-300'><span className='font-semibold text-white'>Set Limits on Your Spending</span> – Play within your financial means and set deposit limits.</p>
                    <p className='text-gray-300'><span className='font-semibold text-white'>Play for Entertainment</span> – Fantasy sports should be fun, not a source of stress.</p>
                    <p className='text-gray-300'><span className='font-semibold text-white'>Take Regular Breaks</span> – Avoid continuous gameplay to maintain a healthy balance.</p>
                    <p className='text-gray-300'><span className='font-semibold text-white'>Avoid Chasing Losses </span> – Play with a clear mind and do not attempt to recover losses impulsively.</p>
                    <p className='text-gray-300'><span className='font-semibold text-white'>Stay Informed</span> – Understand the rules and risks associated with fantasy sports.</p>
                </div>

                <div className='bg-white/10 mt-10 rounded-2xl p-8 flex flex-col justify-center items-center text-lg gap-6'>
                    <p className='text-3xl font-semibold '>Identifying Problem Gaming Behavior</p>
                    <p className='text-gray-300'>If you experience any of the following, consider seeking help:</p>
                    <p className='text-gray-300'>Spending more money than intended.</p>
                    <p className='text-gray-300'>Playing fantasy sports as a way to escape real-life issues.</p>
                    <p className='text-gray-300'>Neglecting responsibilities due to gaming.</p>
                    <p className='text-gray-300'>Feeling stress, anxiety, or frustration related to losses.</p>
                </div>
            </div>
        </Layout>
    )
}

export default FantasyCricket
