import Section from '@/components/ui/section'

const PrivacyPolicyPage: React.FC = () => {
    const lastUpdated = 'November 3, 2025'

    return (
        <div className='bg-background'>
            <Section className='py-6 sm:py-8 md:py-10 lg:py-12'>
                <div>
                    <h1 className='mb-4 text-4xl font-bold'>Privacy Policy</h1>
                    <p className='text-primary/70 mb-8 text-sm'>Last Updated: {lastUpdated}</p>

                    <div className='text-primary/80 space-y-8'>
                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Introduction</h2>
                            <p>
                                At Knowii Voice AI, privacy is not just a feature-it's our
                                foundation. This Privacy Policy explains how we handle your
                                information when you use our voice-to-text application.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Our Privacy Commitment
                            </h2>
                            <p className='mb-4'>
                                Knowii Voice AI is designed with privacy as the default:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    All voice processing happens locally on your computer by default
                                </li>
                                <li>
                                    We do not collect, store, or transmit your voice recordings or
                                    transcriptions
                                </li>
                                <li>Your data stays on your device under your complete control</li>
                                <li>
                                    No account creation or registration is required to use the
                                    application
                                </li>
                                <li>The application works completely offline</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Information We Collect
                            </h2>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Website Usage
                            </h3>
                            <p className='mb-4'>
                                When you visit our website (voice-ai.knowii.net), we use
                                privacy-focused analytics to understand how visitors use our site.
                                This includes:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Page views and navigation patterns</li>
                                <li>
                                    Referring websites and general geographic location (country
                                    level)
                                </li>
                                <li>Device type and browser information</li>
                            </ul>
                            <p className='mt-4'>
                                We do not use cookies or tracking pixels. Our analytics are
                                anonymized and aggregated.
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Purchase Information
                            </h3>
                            <p>
                                When you purchase Knowii Voice AI through Gumroad, your payment and
                                personal information is handled entirely by Gumroad according to
                                their privacy policy. We receive only the information necessary to
                                deliver your purchase (email address and order details).
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Application Usage
                            </h3>
                            <p>
                                The Knowii Voice AI application does not collect any usage data,
                                telemetry, or analytics. Everything stays on your computer.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                How Your Voice Data Is Handled
                            </h2>
                            <p className='mb-4'>
                                When using Knowii Voice AI with local AI models (the default and
                                recommended configuration):
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Voice recordings are captured by your computer's microphone</li>
                                <li>
                                    Audio is processed locally using AI models that run entirely on
                                    your device
                                </li>
                                <li>
                                    Transcriptions are generated on your computer without any
                                    network transmission
                                </li>
                                <li>
                                    Both audio files and transcriptions are stored locally in a
                                    folder you control
                                </li>
                                <li>
                                    You can delete audio files at any time while keeping the
                                    transcriptions
                                </li>
                                <li>
                                    You can disable transcription history entirely if you prefer
                                </li>
                            </ul>

                            <p className='mt-4'>
                                <strong>Optional Cloud Services:</strong> If you choose to use
                                remote/cloud-based AI models for transcription, your audio data will
                                be sent to the respective service provider according to their
                                privacy policies. This is entirely optional and clearly indicated in
                                the application settings.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Support Communications
                            </h2>
                            <p>
                                When you contact us for support via email (support@knowii.net), we
                                collect and store the information you provide to resolve your
                                inquiry. This typically includes your email address, name, and any
                                details you share about your issue or question.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Data Security</h2>
                            <p className='mb-4'>
                                Since Knowii Voice AI operates locally on your computer:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    Your data security depends on your computer's security measures
                                </li>
                                <li>
                                    We recommend using strong passwords, encryption, and keeping
                                    your operating system updated
                                </li>
                                <li>
                                    The application stores data in standard user directories with
                                    appropriate file system permissions
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Third-Party Services
                            </h2>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Gumroad
                            </h3>
                            <p>
                                We use Gumroad for payment processing and product delivery. When you
                                make a purchase, you are subject to Gumroad's privacy policy and
                                terms of service.
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Optional AI Services
                            </h3>
                            <p>
                                If you choose to use cloud-based AI transcription services (entirely
                                optional), your audio data will be processed according to that
                                service provider's privacy policy. We clearly indicate which
                                services are cloud-based in the application.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Your Rights</h2>
                            <p className='mb-4'>You have the right to:</p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    Control all your voice recordings and transcriptions (they're on
                                    your computer)
                                </li>
                                <li>
                                    Delete any data at any time through the application or by
                                    deleting files
                                </li>
                                <li>
                                    Request deletion of any personal information we hold (such as
                                    support emails)
                                </li>
                                <li>Request information about what data we have about you</li>
                                <li>Use the application completely offline</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Children's Privacy
                            </h2>
                            <p>
                                Knowii Voice AI is not directed at children under 13 years of age.
                                We do not knowingly collect personal information from children under
                                13.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                International Users
                            </h2>
                            <p>
                                Since Knowii Voice AI operates locally on your computer, your data
                                remains in your jurisdiction. For website visitors and customers, we
                                comply with applicable data protection laws including GDPR for
                                European users.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Changes to This Privacy Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify
                                you of any changes by posting the new Privacy Policy on this page
                                and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Contact Us</h2>
                            <p className='mb-4'>
                                If you have questions about this Privacy Policy or how we handle
                                your information, please contact us:
                            </p>
                            <p>
                                Email:{' '}
                                <a
                                    href='mailto:support@knowii.net'
                                    className='text-secondary hover:underline'
                                >
                                    support@knowii.net
                                </a>
                            </p>
                        </section>

                        <section className='bg-secondary/10 rounded-lg p-6'>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                The Bottom Line
                            </h2>
                            <p className='text-lg'>
                                Knowii Voice AI is designed so that your voice data never leaves
                                your computer by default. We don't want your data, we don't need
                                your data, and we've built the application specifically to ensure
                                you maintain complete control over your information. Privacy isn't a
                                feature we added-it's the foundation we built on.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default PrivacyPolicyPage
