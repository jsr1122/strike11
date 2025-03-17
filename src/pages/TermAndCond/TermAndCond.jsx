import React from 'react'
import Layout from '../../components/Layout'

const TermAndCond = () => {
    return (
        <Layout>
            <div className="md:px-32 mx-auto px-4 py-8 mt-20">
                <h1 className="text-5xl font-bold mb-10 text-center">Terms & <span className='text-amber-700'>Conditions</span></h1>

                <p className="mb-8">
                Welcome to Strike11 Fantasy Sport! By using our platform, you agree to abide by these Terms & Conditions.
                </p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Users must be 18 years or older to participate.</li>
                            <li>Participation is restricted in states where fantasy sports are prohibited by law.</li>
                            <li>Users must provide accurate information during registration.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Account Responsibilities</h2>
                        <div className="space-y-4">
                            <div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
                                    <li>Any unauthorized activity should be reported to our support team immediately.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Fair Play & Compliance</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Users must adhere to fair play rules and avoid fraudulent activities.</li>
                            <li>Any form of cheating, multi-accounting, or game manipulation will result in account suspension.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contest Rules</h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Entry fees are non-refundable once the contest has started.</li>
                            <li>Prizes will be distributed based on the performance of selected players in real-world matches.</li>
                            <li>The company reserves the right to modify or cancel contests due to unforeseen circumstances.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Payment & Withdrawals</h2>
                        <div className="space-y-4">
                            <div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Users can deposit funds securely using available payment methods.</li>
                                    <li>Withdrawals will be processed only after identity verification.</li>
                                    <li>Taxes, if applicable, will be deducted as per government regulations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                        <div className="space-y-4">
                            <div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Strike11 Fantasy Sport is not responsible for technical issues, system failures, or external disruptions affecting gameplay.</li>
                                    <li>The platform is not liable for financial losses incurred while playing fantasy sports.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Amendments</h2>
                        <p>Strike11 Fantasy Sport reserves the right to update these Terms & Conditions at any time. Users will be notified of significant changes.</p>

                    </section>


                </div>
            </div>
        </Layout>
    )
}

export default TermAndCond
