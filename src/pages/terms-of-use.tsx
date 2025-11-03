import Section from '@/components/ui/section'

const TermsOfUsePage: React.FC = () => {
    const lastUpdated = 'November 3, 2025'

    return (
        <div className=''>
            <Section className='py-6 sm:py-8 md:py-10 lg:py-12'>
                <div>
                    <h1 className='mb-4 text-4xl font-bold'>Terms of Use</h1>
                    <p className='text-primary/70 mb-8 text-sm'>Last Updated: {lastUpdated}</p>

                    <div className='text-primary/80 space-y-8'>
                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Agreement to Terms
                            </h2>
                            <p>
                                By purchasing, downloading, or using Knowii Voice AI, you agree to
                                be bound by these Terms of Use. If you do not agree to these terms,
                                do not use the application.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>License Grant</h2>
                            <p className='mb-4'>
                                Upon purchase, you are granted a perpetual, non-exclusive,
                                non-transferable license to use Knowii Voice AI. This license
                                includes:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Installation and use on computers you own or control</li>
                                <li>Personal and commercial use without restrictions</li>
                                <li>
                                    Access to all future updates and features at no additional cost
                                </li>
                                <li>Use across multiple devices you own</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                License Restrictions
                            </h2>
                            <p className='mb-4'>You may not:</p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Redistribute, sell, lease, or sublicense the application</li>
                                <li>
                                    Reverse engineer, decompile, or disassemble the application
                                    (except where permitted by applicable law)
                                </li>
                                <li>
                                    Remove or modify any copyright notices or proprietary markings
                                </li>
                                <li>
                                    Use the application in any way that violates applicable laws or
                                    regulations
                                </li>
                                <li>
                                    Share your license key or purchase with others who have not
                                    purchased their own license
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Commercial Use</h2>
                            <p>
                                Your license explicitly includes commercial use rights. You may use
                                Knowii Voice AI for:
                            </p>
                            <ul className='mt-4 ml-6 list-disc space-y-2'>
                                <li>Professional work and business communications</li>
                                <li>Client projects and deliverables</li>
                                <li>Creating commercial content and products</li>
                                <li>Any revenue-generating activities</li>
                            </ul>
                            <p className='mt-4'>
                                No additional commercial license or fees are required.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Updates and Support
                            </h2>
                            <p>
                                Your purchase includes lifetime access to updates and new features.
                                We will make reasonable efforts to:
                            </p>
                            <ul className='mt-4 ml-6 list-disc space-y-2'>
                                <li>Provide bug fixes and security updates</li>
                                <li>Add new features and improvements over time</li>
                                <li>Maintain compatibility with supported platforms</li>
                                <li>Respond to support requests in a timely manner</li>
                            </ul>
                            <p className='mt-4'>
                                However, we do not guarantee any specific features, timelines, or
                                support response times.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Refund Policy</h2>
                            <p>
                                We offer a 30-day money-back guarantee. If you are not satisfied
                                with Knowii Voice AI within 30 days of purchase, contact us at
                                support@knowii.net for a full refund. No questions asked.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Platform Availability
                            </h2>
                            <p>
                                Knowii Voice AI is currently available for Windows 10/11. Linux and
                                macOS versions are in development and will be provided to all
                                license holders at no additional cost when available.
                            </p>
                            <p className='mt-4'>
                                We make no guarantees about the timeline for platform-specific
                                releases or feature availability on specific platforms.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Disclaimer of Warranties
                            </h2>
                            <p className='mb-4 uppercase'>
                                Knowii Voice AI is provided "as is" and "as available" without
                                warranties of any kind, either express or implied, including but not
                                limited to:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Merchantability or fitness for a particular purpose</li>
                                <li>Accuracy, reliability, or completeness of transcriptions</li>
                                <li>Uninterrupted or error-free operation of the application</li>
                                <li>
                                    Compatibility with all hardware, software, or configurations
                                </li>
                            </ul>
                            <p className='mt-4'>
                                Voice recognition accuracy depends on many factors including audio
                                quality, background noise, accents, hardware specifications, and the
                                AI models used. We do not guarantee any specific level of
                                transcription accuracy.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Limitation of Liability
                            </h2>
                            <p className='mb-4'>
                                To the maximum extent permitted by applicable law, Sébastien Dubois
                                and Knowii shall not be liable for any indirect, incidental,
                                special, consequential, or punitive damages, or any loss of profits
                                or revenues, whether incurred directly or indirectly, or any loss of
                                data, use, goodwill, or other intangible losses resulting from:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Your use or inability to use the application</li>
                                <li>
                                    Any inaccuracies or errors in transcriptions or translations
                                </li>
                                <li>Any unauthorized access to or use of your data or devices</li>
                                <li>Any bugs, viruses, or harmful code in the application</li>
                            </ul>
                            <p className='mt-4'>
                                In no event shall our total liability exceed the amount you paid for
                                the license ($49).
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                User Responsibilities
                            </h2>
                            <p className='mb-4'>You are responsible for:</p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>Ensuring your computer meets the system requirements</li>
                                <li>Backing up any important data or transcriptions you create</li>
                                <li>Maintaining the security of your computer and files</li>
                                <li>
                                    Reviewing transcriptions for accuracy before relying on them
                                </li>
                                <li>
                                    Complying with all applicable laws when using the application
                                </li>
                                <li>Respecting others' privacy when recording conversations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                AI Models and Third-Party Components
                            </h2>
                            <p>
                                Knowii Voice AI uses open-source AI models and third-party
                                libraries, each with their own licenses. The application includes or
                                may download:
                            </p>
                            <ul className='mt-4 ml-6 list-disc space-y-2'>
                                <li>Whisper models (provided by OpenAI under MIT license)</li>
                                <li>
                                    Parakeet models (provided by NVIDIA under applicable licenses)
                                </li>
                                <li>Other open-source components as documented</li>
                            </ul>
                            <p className='mt-4'>
                                When you use optional cloud-based AI services, you are subject to
                                those service providers' terms and conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Privacy and Data
                            </h2>
                            <p>
                                Your use of Knowii Voice AI is also governed by our Privacy Policy.
                                By default, all data processing occurs locally on your device, and
                                we do not collect your voice recordings or transcriptions. See our
                                Privacy Policy for complete details.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Termination</h2>
                            <p>
                                Your license continues until terminated. You may terminate the
                                license at any time by ceasing to use the application and deleting
                                all copies. We may terminate your license if you breach these terms,
                                though your license is perpetual unless you violate the license
                                restrictions.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Changes to Terms
                            </h2>
                            <p>
                                We may update these Terms of Use from time to time. We will notify
                                users of material changes through the application or website.
                                Continued use of the application after changes constitutes
                                acceptance of the updated terms.
                            </p>
                            <p className='mt-4'>
                                Changes will not affect the fundamental nature of your perpetual
                                license or introduce new fees for existing license holders.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with
                                the laws of Belgium, without regard to its conflict of law
                                provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Severability</h2>
                            <p>
                                If any provision of these terms is found to be unenforceable or
                                invalid, that provision shall be limited or eliminated to the
                                minimum extent necessary so that these Terms of Use shall otherwise
                                remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Entire Agreement
                            </h2>
                            <p>
                                These Terms of Use, together with our Privacy Policy, constitute the
                                entire agreement between you and us regarding the use of Knowii
                                Voice AI.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Contact Information
                            </h2>
                            <p className='mb-4'>
                                If you have questions about these Terms of Use, please contact us:
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
                                In Plain English
                            </h2>
                            <p className='mb-4 text-lg'>
                                You buy it once for $49. You own it forever. Use it for whatever you
                                want-personal projects, commercial work, client deliverables. You
                                can't resell it or share your license with others who haven't paid.
                                We'll keep improving it and you get all updates free. If you don't
                                like it within 30 days, we'll refund you.
                            </p>
                            <p className='text-lg'>
                                AI transcription isn't perfect-accuracy depends on your audio
                                quality and setup. Always review important transcriptions. We're not
                                liable if something goes wrong-the app is provided as-is.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default TermsOfUsePage
