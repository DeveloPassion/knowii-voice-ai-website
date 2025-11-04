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
                                Privacy is not just a feature of Knowii Voice AI. It's part of the
                                foundation. This Privacy Policy explains how I handle your
                                information when you use my voice-to-text application.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Privacy Commitment
                            </h2>
                            <p className='mb-4'>
                                Knowii Voice AI is designed with privacy as the default:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    All voice processing happens locally on your computer by default
                                </li>
                                <li>
                                    Knowii Voice AI does not collect, store, or transmit your voice
                                    recordings or transcriptions unless you explicitly choose to use
                                    optional cloud services
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
                                Information That This Website Collects
                            </h2>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Website Usage
                            </h3>
                            <p className='mb-4'>
                                When you visit this website (voice-ai.knowii.net) or the
                                documentation website (docs.voice-ai.knowii.net), I use
                                privacy-focused analytics (PlausibleAnalytics) to understand how
                                visitors use the site. This includes:
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
                                The collected analytics are anonymized and aggregated.
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Purchase Information
                            </h3>
                            <p>
                                When you purchase Knowii Voice AI through Gumroad, your payment and
                                personal information is handled entirely by Gumroad according to
                                their privacy policy. I receive only the information necessary to
                                deliver your purchase (email address and order details). Same goes
                                for purchases made through the Knowii Community site.
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
                                    folder you own and control
                                </li>
                                <li>
                                    You can delete audio files at any time while keeping the
                                    transcriptions or delete both
                                </li>
                                <li>
                                    You can disable transcription history entirely if you prefer
                                </li>
                            </ul>

                            <p className='mt-4'>
                                <strong>Optional Cloud Services:</strong> Once Knowii Voice AI will
                                support remote/cloud-based AI models for transcription, and if you
                                decide to use them, your audio data will be sent to the respective
                                service provider(s) according to their privacy policies. This is
                                entirely optional and will be clearly indicated in the application
                                settings.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Support Communications
                            </h2>
                            <p>
                                When you contact me for support via email (support@knowii.net), I
                                collect and store the information you provide to resolve your
                                inquiry. This typically includes your email address, name, and any
                                details you share about your issue or question. I do not keep the
                                information for longer than strictly necessary to provide support.
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
                                    I recommend using strong passwords, full disk encryption, and
                                    keeping your operating system updated and regularly scanned for
                                    malware
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
                                I use Gumroad for payment processing and product delivery. When you
                                make a purchase, you are subject to Gumroad's privacy policy and
                                terms of service.
                            </p>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Circle.so
                            </h3>
                            <p>
                                I use Circle.so for community engagement and support. When you make
                                a purchase through the Knowii Community, you are subject to
                                Circle.so's privacy policy and terms of service. Same thing if you
                                join the community
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Optional AI Services
                            </h3>
                            <p>
                                If you choose to use cloud-based AI transcription services (entirely
                                optional), your audio data will be processed according to that
                                service provider's privacy policy. Knowii Voice AI will clearly
                                indicate which services are cloud-based in the application.
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
                                    Request deletion of any personal information I hold (such as
                                    support emails)
                                </li>
                                <li>Request information about what data I have about you</li>
                                <li>Use the application completely offline</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Children's Privacy
                            </h2>
                            <p>
                                Knowii Voice AI is not directed at children under 18 years of age.
                                That being said, I do not knowingly collect personal information
                                from children. If I become aware that I have inadvertently collected
                                personal information from a child under 18, I will take steps to
                                delete that information as soon as possible.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                International Users
                            </h2>
                            <p>
                                Since Knowii Voice AI operates locally on your computer, your data
                                remains in your jurisdiction. For website visitors and customers, I
                                comply with applicable data protection laws including GDPR for
                                European users.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Changes to This Privacy Policy
                            </h2>
                            <p>
                                I may update this Privacy Policy from time to time. I will notify
                                you of any changes by posting the new Privacy Policy on this page
                                and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Contact Me</h2>
                            <p className='mb-4'>
                                If you have questions about this Privacy Policy or how I handle your
                                information, please contact me directly:
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
                                your computer by default. I don't want your data, I don't need your
                                data, and I've built the application specifically to ensure you
                                maintain complete control over your information. Privacy isn't a
                                feature I added-it's the foundation I built on.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default PrivacyPolicyPage
