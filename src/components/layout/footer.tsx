import { Link } from 'react-router'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='border-primary/10 bg-background border-t py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='xg:px-24 mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32'>
                <div className='grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 lg:gap-16'>
                    {/* Logo and Description */}
                    <div className='flex flex-col gap-4'>
                        <Link to='/' className='flex items-center gap-2'>
                            <img
                                src='/assets/images/logo.svg'
                                alt='Knowii Voice AI'
                                className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20'
                            />
                        </Link>
                        <p className='text-primary/70 text-sm'>
                            Voice-to-text that respects your privacy. Works everywhere. Owned
                            forever.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className='mb-4 font-semibold'>Resources</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <a
                                    href='https://knowii.net'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Knowii Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://docs.voice-ai.knowii.net/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://docs.voice-ai.knowii.net/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li>
                                <Link
                                    to='/privacy-policy'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/terms-of-use'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Terms of Use
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className='mb-4 font-semibold'>Support</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <a
                                    href='https://docs.voice-ai.knowii.net/support'
                                    className='text-primary/70 hover:text-secondary transition-colors'
                                >
                                    Support page
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-primary/10 text-primary/70 mt-12 border-t pt-12 text-center text-sm sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20'>
                    <p>
                        © {currentYear} Knowii Voice AI by{' '}
                        <a
                            href='https://www.dsebastien.net'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-secondary transition-colors'
                        >
                            Sébastien Dubois
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
