import Section from '@/components/ui/section'

const PrivacyPolicyPage: React.FC = () => {
    const lastUpdated = 'November 4, 2025'

    return (
        <div className='bg-background'>
            <Section className='py-6 sm:py-8 md:py-10 lg:py-12'>
                <div>
                    <h1 className='mb-4 text-4xl font-bold'>Privacy Policy</h1>
                    <p className='text-primary/70 mb-8 text-sm'>Last Updated: {lastUpdated}</p>

                    <div className='text-primary/80 space-y-8'>
                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Data Controller Information
                            </h2>
                            <p className='mb-4'>
                                The data controller responsible for your personal data is:
                            </p>
                            <div className='bg-background/50 rounded-lg p-4'>
                                <p className='font-semibold'>DeveloPassion SRL</p>
                                <p>126 route de Mons</p>
                                <p>7130 Binche, Belgium</p>
                                <p>VAT: BE0717 561 755</p>
                                <p className='mt-2'>
                                    Represented by: Sébastien Dubois
                                    <br />
                                    Email:{' '}
                                    <a
                                        href='mailto:support@knowii.net'
                                        className='text-secondary hover:underline'
                                    >
                                        support@knowii.net
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Introduction</h2>
                            <p className='mb-4'>
                                Privacy is not just a feature of Knowii Voice AI. It's part of the
                                foundation. This Privacy Policy explains how DeveloPassion SRL
                                handles your information when you use the Knowii Voice AI
                                voice-to-text application and related services.
                            </p>
                            <p>
                                This Privacy Policy should be read together with our{' '}
                                <a href='/terms-of-use' className='text-secondary hover:underline'>
                                    Terms of Use
                                </a>{' '}
                                and{' '}
                                <a
                                    href='https://developassion.be/terms/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    DeveloPassion's Terms and Conditions
                                </a>
                                , which also apply to your use of Knowii Voice AI.
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
                                documentation website (docs.voice-ai.knowii.net), we use
                                privacy-focused analytics (Plausible Analytics) to understand how
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
                                The collected analytics are anonymized, aggregated, and do not
                                identify individual users. No cookies are used for tracking.
                            </p>
                            <p className='mt-4'>
                                <strong>Legal Basis:</strong> Website analytics are processed based
                                on our legitimate interests in improving our website and services
                                (GDPR Art. 6(1)(f)).
                            </p>
                            <p className='mt-4'>
                                <strong>Plausible Analytics:</strong> For more information about how
                                Plausible handles data, see their{' '}
                                <a
                                    href='https://plausible.io/privacy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Privacy Policy
                                </a>
                                ,{' '}
                                <a
                                    href='https://plausible.io/data-policy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Data Policy
                                </a>
                                , and{' '}
                                <a
                                    href='https://plausible.io/terms'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Terms of Service
                                </a>
                                .
                            </p>

                            <h3 className='text-primary mt-6 mb-2 text-xl font-semibold'>
                                Purchase Information
                            </h3>
                            <p className='mb-4'>
                                When you purchase Knowii Voice AI through Gumroad, your payment and
                                personal information is handled entirely by Gumroad according to
                                their privacy policy. DeveloPassion SRL receives only the
                                information necessary to deliver your purchase (email address and
                                order details). Same goes for purchases made through the Knowii
                                Community site.
                            </p>
                            <p className='mb-4'>
                                <strong>Gumroad:</strong> See Gumroad's{' '}
                                <a
                                    href='https://gumroad.com/privacy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Privacy Policy
                                </a>{' '}
                                and{' '}
                                <a
                                    href='https://gumroad.com/terms'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Terms of Service
                                </a>
                                .
                            </p>
                            <p className='mt-4'>
                                <strong>Legal Basis:</strong> Processing of purchase information is
                                necessary for the performance of the contract between you and
                                DeveloPassion SRL (GDPR Art. 6(1)(b)).
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
                                When you contact DeveloPassion SRL for support via email
                                (support@knowii.net), we collect and store the information you
                                provide to resolve your inquiry. This typically includes your email
                                address, name, and any details you share about your issue or
                                question.
                            </p>
                            <p className='mt-4'>
                                <strong>Legal Basis:</strong> Processing of support communications
                                is necessary for our legitimate interests in providing customer
                                support (GDPR Art. 6(1)(f)).
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Legal Basis for Processing
                            </h2>
                            <p className='mb-4'>
                                DeveloPassion SRL processes your personal data based on the
                                following legal grounds under GDPR:
                            </p>
                            <ul className='ml-6 list-disc space-y-3'>
                                <li>
                                    <strong>Contract Performance (Art. 6(1)(b)):</strong> Processing
                                    purchase information and delivering the software is necessary to
                                    fulfill our contractual obligations to you.
                                </li>
                                <li>
                                    <strong>Legitimate Interests (Art. 6(1)(f)):</strong> Website
                                    analytics and support communications are processed based on our
                                    legitimate interest in improving our services and providing
                                    customer support, which does not override your rights and
                                    freedoms.
                                </li>
                                <li>
                                    <strong>Consent (Art. 6(1)(a)):</strong> If you choose to use
                                    optional cloud-based AI services in the future, processing will
                                    be based on your explicit consent.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Data Retention</h2>
                            <p className='mb-4'>
                                DeveloPassion SRL retains personal data only as long as necessary
                                for the purposes outlined in this Privacy Policy:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    <strong>Purchase Information:</strong> Retained for the duration
                                    required by applicable tax and accounting laws (typically 7-10
                                    years depending on jurisdiction).
                                </li>
                                <li>
                                    <strong>Support Communications:</strong> Retained for up to 3
                                    years after the last communication to maintain service
                                    continuity and reference history.
                                </li>
                                <li>
                                    <strong>Analytics Data:</strong> Aggregated and anonymized
                                    website analytics are retained indefinitely as they cannot
                                    identify individuals.
                                </li>
                                <li>
                                    <strong>Application Data:</strong> All voice recordings and
                                    transcriptions remain on your device and are under your complete
                                    control. You can delete them at any time.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Data Security</h2>
                            <p className='mb-4'>
                                DeveloPassion SRL takes data security seriously and implements
                                appropriate technical and organizational measures to protect your
                                personal data.
                            </p>
                            <p className='mb-4'>
                                Since Knowii Voice AI operates locally on your computer by default:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    Your voice data security depends primarily on your computer's
                                    security measures
                                </li>
                                <li>
                                    We recommend using strong passwords, full disk encryption, and
                                    keeping your operating system updated and regularly scanned for
                                    malware
                                </li>
                                <li>
                                    The application stores data in standard user directories with
                                    appropriate file system permissions
                                </li>
                                <li>
                                    For data we collect (purchase and support information),
                                    DeveloPassion SRL uses industry-standard security measures
                                    including encryption in transit and at rest
                                </li>
                            </ul>
                            <p className='mt-4'>
                                While we implement robust security measures, no method of
                                transmission or storage is 100% secure. We cannot guarantee absolute
                                security but are committed to protecting your data using appropriate
                                safeguards.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Third-Party Services
                            </h2>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Gumroad
                            </h3>
                            <p className='mb-4'>
                                DeveloPassion SRL uses Gumroad for payment processing and product
                                delivery. When you make a purchase through Gumroad, you are subject
                                to Gumroad's privacy policy and terms of service. Gumroad acts as an
                                independent data controller for payment information.
                            </p>
                            <p>
                                For more information, see Gumroad's{' '}
                                <a
                                    href='https://gumroad.com/privacy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Privacy Policy
                                </a>{' '}
                                and{' '}
                                <a
                                    href='https://gumroad.com/terms'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Terms of Service
                                </a>
                                .
                            </p>

                            <h3 className='text-primary mt-4 mb-2 text-xl font-semibold'>
                                Circle.so
                            </h3>
                            <p className='mb-4'>
                                DeveloPassion SRL uses Circle.so for community engagement and
                                support. When you make a purchase through the Knowii Community or
                                join the community, you are subject to Circle.so's privacy policy
                                and terms of service. Circle.so acts as an independent data
                                controller for community-related information.
                            </p>
                            <p>
                                For more information, see Circle.so's{' '}
                                <a
                                    href='https://circle.so/privacy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Privacy Policy
                                </a>
                                ,{' '}
                                <a
                                    href='https://circle.so/terms'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Terms of Service
                                </a>
                                ,{' '}
                                <a
                                    href='https://circle.so/cookie-policy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Cookie Policy
                                </a>
                                ,{' '}
                                <a
                                    href='https://circle.so/dpa'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Data Processing Agreement
                                </a>
                                , and{' '}
                                <a
                                    href='https://trust.circle.so/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-secondary hover:underline'
                                >
                                    Trust Center
                                </a>
                                .
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
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Your Rights Under GDPR
                            </h2>
                            <p className='mb-4'>
                                Under the General Data Protection Regulation (GDPR), you have the
                                following rights regarding your personal data:
                            </p>
                            <ul className='ml-6 list-disc space-y-3'>
                                <li>
                                    <strong>Right of Access (Art. 15):</strong> You have the right
                                    to request information about what personal data we hold about
                                    you and receive a copy of your personal data.
                                </li>
                                <li>
                                    <strong>Right to Rectification (Art. 16):</strong> You have the
                                    right to request correction of inaccurate or incomplete personal
                                    data.
                                </li>
                                <li>
                                    <strong>Right to Erasure (Art. 17):</strong> You have the right
                                    to request deletion of your personal data under certain
                                    circumstances (e.g., when data is no longer necessary for the
                                    purposes for which it was collected).
                                </li>
                                <li>
                                    <strong>Right to Restriction of Processing (Art. 18):</strong>{' '}
                                    You have the right to request that we restrict processing of
                                    your personal data under certain circumstances.
                                </li>
                                <li>
                                    <strong>Right to Data Portability (Art. 20):</strong> You have
                                    the right to receive your personal data in a structured,
                                    commonly used, and machine-readable format and to transmit that
                                    data to another controller.
                                </li>
                                <li>
                                    <strong>Right to Object (Art. 21):</strong> You have the right
                                    to object to processing of your personal data based on
                                    legitimate interests or for direct marketing purposes.
                                </li>
                                <li>
                                    <strong>Right to Withdraw Consent (Art. 7(3)):</strong> Where
                                    processing is based on consent, you have the right to withdraw
                                    your consent at any time.
                                </li>
                                <li>
                                    <strong>Application Data:</strong> You have complete control
                                    over all voice recordings and transcriptions stored on your
                                    computer. You can delete them at any time through the
                                    application or by deleting files directly.
                                </li>
                            </ul>
                            <p className='mt-4'>
                                To exercise any of these rights, please contact us at{' '}
                                <a
                                    href='mailto:support@knowii.net'
                                    className='text-secondary hover:underline'
                                >
                                    support@knowii.net
                                </a>
                                . We will respond to your request within 30 days as required by
                                GDPR.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Right to Lodge a Complaint
                            </h2>
                            <p className='mb-4'>
                                If you believe that DeveloPassion SRL has not complied with your
                                data protection rights, you have the right to lodge a complaint with
                                a supervisory authority, in particular in the EU Member State of
                                your habitual residence, place of work, or place of the alleged
                                infringement.
                            </p>
                            <p className='mb-4'>For Belgium, the supervisory authority is:</p>
                            <div className='bg-background/50 rounded-lg p-4'>
                                <p className='font-semibold'>
                                    Data Protection Authority (Autorité de protection des données /
                                    Gegevensbeschermingsautoriteit)
                                </p>
                                <p>Rue de la Presse 35, 1000 Brussels, Belgium</p>
                                <p>
                                    Website:{' '}
                                    <a
                                        href='https://www.dataprotectionauthority.be'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-secondary hover:underline'
                                    >
                                        www.dataprotectionauthority.be
                                    </a>
                                </p>
                                <p>
                                    Email:{' '}
                                    <a
                                        href='mailto:contact@apd-gba.be'
                                        className='text-secondary hover:underline'
                                    >
                                        contact@apd-gba.be
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Children's Privacy
                            </h2>
                            <p>
                                Knowii Voice AI is not directed at children under 16 years of age
                                (the age of consent under GDPR). DeveloPassion SRL does not
                                knowingly collect personal information from children. If we become
                                aware that we have inadvertently collected personal information from
                                a child under 16 without verified parental consent, we will take
                                immediate steps to delete that information in compliance with GDPR
                                Article 8.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                International Data Transfers
                            </h2>
                            <p className='mb-4'>
                                Since Knowii Voice AI operates locally on your computer by default,
                                your voice recordings and transcriptions remain in your jurisdiction
                                and are not transferred internationally.
                            </p>
                            <p className='mb-4'>
                                For other personal data (purchase information, support
                                communications):
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    DeveloPassion SRL is based in Belgium (EU) and processes data
                                    within the European Economic Area (EEA).
                                </li>
                                <li>
                                    Third-party service providers (Gumroad, Circle.so) may transfer
                                    data outside the EEA. These providers have appropriate
                                    safeguards in place, such as Standard Contractual Clauses or
                                    adequacy decisions.
                                </li>
                                <li>
                                    If you choose to use optional cloud-based AI services in the
                                    future, data transfers will be clearly disclosed and subject to
                                    your explicit consent.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Automated Decision-Making
                            </h2>
                            <p>
                                DeveloPassion SRL does not use your personal data for automated
                                decision-making or profiling as defined under GDPR Article 22. The
                                AI transcription functionality operates locally on your device and
                                does not involve automated decision-making that produces legal or
                                similarly significant effects.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                Changes to This Privacy Policy
                            </h2>
                            <p>
                                DeveloPassion SRL may update this Privacy Policy from time to time
                                to reflect changes in our practices or legal requirements. We will
                                notify you of any material changes by posting the new Privacy Policy
                                on this page and updating the "Last Updated" date. For significant
                                changes that affect your rights, we may also provide additional
                                notice through email or through the application.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>Contact Us</h2>
                            <p className='mb-4'>
                                If you have any questions about this Privacy Policy, wish to
                                exercise your data protection rights, or have concerns about how we
                                handle your information, please contact us:
                            </p>
                            <div className='bg-background/50 rounded-lg p-4'>
                                <p className='font-semibold'>DeveloPassion SRL</p>
                                <p>Data Protection Inquiries</p>
                                <p>126 route de Mons, 7130 Binche, Belgium</p>
                                <p>
                                    Email:{' '}
                                    <a
                                        href='mailto:support@knowii.net'
                                        className='text-secondary hover:underline'
                                    >
                                        support@knowii.net
                                    </a>
                                </p>
                            </div>
                            <p className='mt-4'>
                                We will respond to your privacy-related requests within 30 days as
                                required by GDPR.
                            </p>
                        </section>

                        <section className='bg-secondary/10 rounded-lg p-6'>
                            <h2 className='text-primary mb-4 text-2xl font-bold'>
                                The Bottom Line
                            </h2>
                            <p className='text-lg'>
                                Knowii Voice AI is designed so that your voice data never leaves
                                your computer by default. DeveloPassion SRL has built this
                                application with privacy as the foundation, not as a feature. We
                                don't want your data, we don't need your data, and we've engineered
                                the application to ensure you maintain complete control over your
                                information. We are committed to full GDPR compliance and respecting
                                your data protection rights.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default PrivacyPolicyPage
