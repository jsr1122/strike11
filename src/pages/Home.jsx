import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Achivement from '../components/Achivement'
import SponsorCrausal from '../components/sponser/SponserCrausal'
import PlatformWorks from '../components/PlatformWorks'
import LegalAndCompliance from '../components/LegalAndCompliance'
import PlayFantasy from '../components/PlayFantasy'
import Faqs from '../components/Faqs'
import Modal from '../components/Modal'
import MainModal from '../components/MainModal'


const NotificationModal = ({ onAccept, onDecline }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-4">Enable Notifications</h3>
      <p className="text-gray-300 mb-6">
        Would you like to receive notifications for latest updates from Ojass?
      </p>
      <div className="flex gap-4 justify-end">
        <button
          onClick={onDecline}
          className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
        >
          Not Now
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enable
        </button>
      </div>
    </div>
  </div>
);

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Achivement/>
      <PlatformWorks/>
      <LegalAndCompliance/>
      <SponsorCrausal/>
      <PlayFantasy/>
      <Faqs/>
      <MainModal/>
      <Modal/>
    </Layout>
  )
}

export default Home
