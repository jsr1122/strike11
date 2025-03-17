import React from 'react'

const PlatformWorks = () => {
    return (
        <div>
            <div className='bg-black py-12'>
            <h2 className='text-5xl font-semibold text-center pb-20 md:pb-0'>How the <span className='text-amber-700'>Platform Works</span></h2>
                <div className='flex flex-wrap gap-12 md:mx-24 my-16 items-center justify-center '>
                    <div className='md:w-2/5 h-[650px] bg-stone-950 rounded-2xl p-8 flex flex-col justify-center items-center text-lg gap-8'>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Register & Verify Your Account</span> – Sign up with your email and mobile number. Verify your identity to ensure compliance with legal requirements.</p>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Choose a Match</span> – Browse upcoming matches and select the game you want to participate in.</p>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Create Your Fantasy Team</span> – Use your skills to build a team within the allocated budget, selecting real-life players who will earn points based on their performance.</p>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Join Contests & Compete</span> – Enter free or paid contests, compete against other users, and track your team’s performance in real-time.</p>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Earn Points & Win Rewards</span> – Your fantasy team earns points based on players’ actual game performance. Climb the leaderboard and win exciting cash prizes.</p>
                        <p className='text-gray-300'><span className='font-semibold text-white'>Withdraw Your Winnings</span> – Securely withdraw your earnings through UPI, bank transfer, or other available payment options.</p>
                    </div>
                    <div className='md:w-2/5 bg-gray-500 rounded-2xl'>
                        <img src="/logo.jpg" alt="" className='object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformWorks
