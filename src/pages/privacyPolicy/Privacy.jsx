import React from 'react'
import Layout from '../../components/Layout'

const Privacy = () => {
    return (
        <Layout>
            <div className="md:px-32 mx-auto px-4 py-8 mt-20">
                <h1 className="text-5xl font-bold mb-10 text-center">Privacy <span className='text-amber-700'>Policy</span></h1>

                <p className="mb-8">
                At Strike11 Fantasy Sport, we are committed to safeguarding the privacy and security of our users' data. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal Information: Name, email, contact details, and date of birth.</li>
                            <li>Financial Information: Payment details required for deposits and withdrawals.</li>
                            <li>Device & Usage Data: IP address, device type, and browsing behavior on our platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <div className="space-y-4">
                            <div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To provide and improve our services.</li>
                                    <li>To verify user identity and ensure compliance with legal regulations.</li>
                                    <li>To communicate updates, promotions, and service notifications.</li>
                                    <li>To detect and prevent fraudulent activities.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Protection Measures</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption: All sensitive data is encrypted using industry-standard protocols.</li>
                            <li>Secure Transactions: We use trusted payment gateways for safe deposits and withdrawals.</li>
                            <li>Limited Access: User data is accessed only by authorized personnel.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
                        <p className="mb-2">We do not sell or share your personal data with third parties, except:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>When required by law or regulatory authorities.</li>
                            <li>To trusted partners providing essential services (e.g., payment processors).</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                        <div className="space-y-4">
                            <div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access & Update: Users can review and update their personal information.</li>
                                    <li>Opt-Out: Users can unsubscribe from promotional communications at any time.</li>
                                    <li>Data Deletion: Users may request account deletion and data removal, subject to legal obligations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                        <p>We may update this Privacy Policy periodically. Users will be notified of significant changes.</p>
                        
                    </section>

                    
                </div>
            </div>
        </Layout>
    )
}

export default Privacy
