import React from 'react'

const PlayFantasy = () => {
    return (
        <div>
            <div className='flex flex-col gap-6 md:mx-24 mx-2 my-20'>
                <h2 className='text-5xl font-semibold text-center'>How to Play <span className='text-amber-700'>Fantasy Sports?</span></h2>
                <p className='text-center text-xl pb-10 pt-3'>Playing fantasy sports on Strike11 Fantasy Sport is easy and exciting. Follow these steps to get started:</p>
                <div className='flex flex-wrap items-center justify-center gap-8'>
                    <div className='w-96 h-32 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-3 px-4 text-center'>
                        <h2 className='font-medium text-lg'>Select a Match</h2>
                        <p>Pick an upcoming match from the available fixtures.</p>
                    </div>
                    <div className='w-96 h-32 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-3 px-4 text-center'>
                        <h2 className='font-medium text-lg'>Create Your Dream Team</h2>
                        <p>Choose players within a budget limit, balancing star performers and underrated players.</p>
                    </div>
                    <div className='w-96 h-32 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-3 px-4 text-center'>
                        <h2 className='font-medium text-lg'>Join Contests</h2>
                        <p>Enter free or paid contests based on your preference.</p>
                    </div>
                    <div className='w-96 h-32 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-3 px-4 text-center'>
                        <h2 className='font-medium text-lg'>Track Live Scores</h2>
                        <p>Monitor your team’s real-time performance and see how you rank against competitors.</p>
                    </div>
                    <div className='w-96 h-32 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-3 px-4 text-center'>
                        <h2 className='font-medium text-lg'>Win & Withdraw Earnings</h2>
                        <p>Earn points based on your team’s performance and withdraw winnings securely.</p>
                    </div>
                </div>
                <p className='text-center text-xl pb-10 pt-3'>Master the game with strategy, knowledge, and a little bit of sports intuition!</p>
            </div>
        </div>
    )
}

export default PlayFantasy
