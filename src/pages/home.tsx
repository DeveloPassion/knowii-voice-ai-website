import Section from '@/components/ui/section'
import CTAButton from '@/components/ui/cta-button'
import { FaCheckCircle, FaWindows } from 'react-icons/fa'

const HomePage: React.FC = () => {
    return (
        <div className='overflow-x-hidden'>
            {/* Hero Section */}
            <Section className='xg:pt-24 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28'>
                <div className='text-center'>
                    <h1 className='mb-6 text-4xl leading-tight font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:mb-10 lg:text-7xl'>
                        You Think Faster Than You Type
                    </h1>
                    <p className='text-primary/80 mb-8 text-xl sm:mb-10 sm:text-2xl md:text-3xl lg:mb-12'>
                        Press. Speak. Release. Your words appear exactly where you need them.
                    </p>
                    <p className='text-primary/70 mb-6 text-lg sm:mb-8 sm:text-xl'>
                        Works in every app. Runs on your computer. Costs $49, one time.
                    </p>
                    <p className='text-primary/90 mb-10 text-lg font-semibold sm:mb-12 lg:mb-14'>
                        No cloud. No subscription. Just your voice and your computer.
                    </p>
                    <p className='text-primary/70 mb-8 text-base sm:mb-10 sm:text-lg'>
                        Join other early adopters who've already ditched typing
                    </p>
                    <div className='mb-16 flex flex-col items-center gap-6 sm:mb-20 lg:mb-24'>
                        <CTAButton
                            href='https://developassion.gumroad.com/l/knowii-voice-ai'
                            size='large'
                        >
                            Get it now - $49
                        </CTAButton>
                        <p className='text-primary/60 text-sm'>
                            One-time payment. No subscription required.
                        </p>
                    </div>

                    {/* Hero Video */}
                    <div className='flex justify-center'>
                        <div className='relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl'>
                            <iframe
                                src='https://www.youtube.com/embed/Z3nnUCJRWhI'
                                title='Knowii Voice AI Demo'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='absolute inset-0 h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Your Reality Right Now */}
            <Section className='bg-background/50'>
                <div>
                    <h2 className='mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16'>
                        Your Reality Right Now
                    </h2>
                    <div className='text-primary/80 space-y-8 text-lg sm:space-y-10 lg:text-xl'>
                        <p>Typing is slow.</p>
                        <p>
                            You know exactly what you want to say. The words are RIGHT THERE in your
                            head.
                        </p>
                        <p>
                            But your fingers can't keep up. Getting it from your brain to the screen
                            takes forever.
                        </p>
                        <p>
                            Your fingers hunt for keys. Autocorrect changes words you didn't want
                            changed. You stop to fix typos. You lose your train of thought.
                        </p>
                        <p>Five minutes later, you've written three sentences.</p>
                        <p className='text-primary text-xl font-semibold'>
                            This happens dozens of times every single day.
                        </p>
                        <p>The bottleneck isn't your brain. It's your keyboard.</p>
                        <div className='bg-secondary/10 my-8 rounded-lg p-6 text-center'>
                            <p className='text-secondary mb-2 text-2xl font-bold'>
                                The average person types 40 words per minute.
                            </p>
                            <p className='text-2xl font-bold'>You speak at 150 words per minute.</p>
                            <p className='text-primary/90 mt-4 text-xl'>
                                That's nearly <span className='text-secondary'>4x</span> faster.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Picture This Instead */}
            <Section>
                <div>
                    <h2 className='mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16'>
                        Picture This Instead
                    </h2>
                    <div className='text-primary/80 space-y-8 text-lg sm:space-y-10'>
                        <p className='text-primary text-2xl font-semibold'>You, tomorrow</p>
                        <p>You open an email.</p>
                        <p>
                            You see a message that needs a thoughtful response. The kind that would
                            normally take you ten minutes to type carefully.
                        </p>
                        <p>Instead of typing you just press and hold Ctrl+Space.</p>
                        <p>
                            You speak, naturally, like you're talking to a friend: "Hey Alexis.
                            Thanks for reaching out about this. I've been thinking about the same
                            thing, and here's what I think we should do..."
                        </p>
                        <p>You release the keys.</p>
                        <p>
                            The words appear. Exactly where your cursor is. Exactly what you said.
                        </p>
                        <p>You read it once, make a tiny edit, and hit send. Done!</p>
                        <p className='text-secondary text-xl font-semibold'>
                            You just saved five minutes.
                        </p>
                        <p>
                            Now multiply that by every email, every message, every document, every
                            blog post, every AI prompt, etc. <em>Everything</em> you write in a
                            week.
                        </p>
                        <p className='text-primary text-xl font-semibold'>
                            How many hours will you get back?
                        </p>
                    </div>
                </div>
            </Section>

            {/* This Already Exists */}
            <Section className='bg-background/50'>
                <div>
                    <h2 className='mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16'>
                        This Already Exists
                    </h2>
                    <p className='mb-6 text-center text-xl'>
                        It's called{' '}
                        <a
                            href='https://developassion.gumroad.com/l/knowii-voice-ai'
                            className='text-primary font-semibold hover:underline'
                        >
                            Knowii Voice AI
                        </a>
                        .
                    </p>
                    <p className='text-primary/80 mb-8 text-center text-lg'>
                        It's a voice-to-text application that runs entirely on your computer.
                    </p>
                    <p className='text-primary/80 mb-6 text-center text-lg'>
                        One keyboard shortcut. Any application. Complete privacy.
                    </p>

                    <div className='space-y-8'>
                        <div>
                            <h3 className='mb-3 text-2xl font-bold'>Press and hold Ctrl+Space.</h3>
                            <p className='text-primary/80 text-lg'>
                                The app starts recording your voice. You'll hear a subtle sound so
                                you know it's listening.
                            </p>
                        </div>

                        <div>
                            <h3 className='mb-3 text-2xl font-bold'>Speak naturally.</h3>
                            <p className='text-primary/80 text-lg'>
                                Like you're talking to someone. Don't slow down. Don't enunciate
                                weirdly. Just talk.
                            </p>
                        </div>

                        <div>
                            <h3 className='mb-3 text-2xl font-bold'>Release the key.</h3>
                            <p className='text-primary/80 text-lg'>
                                AI transcribes your words (on your computer, offline) and pastes
                                them exactly where your cursor is.
                            </p>
                        </div>

                        <p className='text-secondary text-center text-2xl font-bold'>That's it.</p>

                        <div className='text-primary/80 space-y-3 text-lg'>
                            <p>No cloud. No lag. No usage limits. No monthly fee.</p>
                            <p>
                                Works in Gmail, Notion, Microsoft Word, Microsoft Teams, Slack,
                                Discord, WhatsApp, Telegram, VS Code, your terminal... Literally any
                                application where you can type.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Screenshots Section */}
            <Section className='lg:!max-w-[1600px] xl:!max-w-[1800px] 2xl:!max-w-[2000px]'>
                <div>
                    <h2 className='mb-12 text-center text-3xl font-bold sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:mb-20'>
                        See It In Action
                    </h2>
                    <div className='grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-16'>
                        <div className='overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-[1.02] lg:shadow-2xl'>
                            <img
                                src='/assets/screenshots/2025-11-03-settings-general.png'
                                alt='Knowii Voice AI Settings'
                                className='h-full w-full object-contain'
                            />
                        </div>
                        <div className='overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-[1.02] lg:shadow-2xl'>
                            <img
                                src='/assets/screenshots/2025-11-03-model-selection.png'
                                alt='Model Selection'
                                className='h-full w-full object-contain'
                            />
                        </div>
                        <div className='overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-[1.02] lg:shadow-2xl'>
                            <img
                                src='/assets/screenshots/2025-11-03-history.png'
                                alt='Transcription History'
                                className='h-full w-full object-contain'
                            />
                        </div>
                        <div className='overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-[1.02] lg:shadow-2xl'>
                            <img
                                src='/assets/screenshots/2025-11-03-onboarding.png'
                                alt='Onboarding'
                                className='h-full w-full object-contain'
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* What Makes This Different */}
            <Section id='features' className='bg-background/50'>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        What Makes This Different
                    </h2>

                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6'>
                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                You actually own it
                            </h3>
                            <p className='text-primary/80'>
                                Pay $49 once. Own it forever. Every update, every new feature,
                                included. No subscription. No usage caps. No "premium tier."
                            </p>
                        </div>

                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                It works in every app
                            </h3>
                            <p className='text-primary/80'>
                                Not just Google Docs. Not just Chrome. Every. Single. Application.
                                If you can put your cursor there and type, you can speak there
                                instead.
                            </p>
                        </div>

                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                Your data stays yours
                            </h3>
                            <p className='text-primary/80'>
                                The AI models run on your computer by default. Your voice recordings
                                are processed locally. Nothing leaves your machine unless you want
                                to. No internet required after you download the AI model once.
                            </p>
                        </div>

                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                You control which AI model
                            </h3>
                            <p className='text-primary/80'>
                                Multiple models supported. Download a small and fast model if you
                                want near-instant results. Download a larger and more accurate one
                                for technical content. Switch anytime.
                            </p>
                        </div>

                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                You can see everything you've ever said
                            </h3>
                            <p className='text-primary/80'>
                                Every transcription is saved and searchable. Need to find that thing
                                you said three weeks ago? Search for it. It's not just a
                                transcription tool. It's external memory you can rely on. Want to
                                copy an old transcription again? Double-click it. Need to make
                                edits? Delete audio files but keep the text. Don't want to save
                                transcriptions? Just disable the feature.
                            </p>
                        </div>

                        <div className='bg-background/80 rounded-lg p-4 sm:p-5 md:p-6'>
                            <h3 className='text-secondary mb-2 text-xl font-bold sm:text-2xl'>
                                Various supported languages
                            </h3>
                            <p className='text-primary/80'>
                                Many languages are supported by different voice-to-text AI models
                                and you can speak in one language and get transcriptions in another.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Who This Is For */}
            <Section>
                <div>
                    <h2 className='mb-12 text-center text-3xl font-bold sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:mb-20'>
                        Who This Is Really For
                    </h2>

                    <div className='space-y-8'>
                        {[
                            {
                                title: 'You communicate for work',
                                description:
                                    "Emails. Slack. Teams. Support tickets. By noon you've typed 5,000 words and your hands hurt. Your responses become faster and more thorough because speaking doesn't drain you like typing does."
                            },
                            {
                                title: 'Your keyboard slows you down',
                                description:
                                    "Your ideas come faster than your fingers can type. It's frustrating. You know you're wasting your time. Now you can finally keep up with your mind."
                            },
                            {
                                title: 'You want to fully leverage AI',
                                description:
                                    "You're using AI, but it takes too long to prepare your prompts. You're the bottleneck, AI isn't. Drastically increase the pace at which you give instructions to AI."
                            },
                            {
                                title: 'You create content',
                                description:
                                    "Blog posts. Articles. Scripts. You stare at the blank page because the gap between thought and text is exhausting. Speak your first draft like you're explaining it to a friend."
                            },
                            {
                                title: 'You write code for a living',
                                description:
                                    'Documentation takes forever. Code comments feel like a chore. Commit messages end up vague. Speak your documentation while reviewing code. Your PR descriptions actually explain the context.'
                            },
                            {
                                title: 'You care about privacy',
                                description:
                                    'You\'ve read the terms of service. You know what "we may use your data to improve our models" means. Your data is your data. On your machine. Under your control.'
                            }
                        ].map((item, index) => (
                            <div key={index} className='border-secondary border-l-4 pl-6'>
                                <h3 className='mb-3 text-xl font-bold'>{item.title}</h3>
                                <p className='text-primary/80'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* The Numbers */}
            <Section className='bg-secondary/10'>
                <div className='text-center'>
                    <h2 className='mb-8 text-3xl font-bold sm:text-4xl md:text-5xl'>The Numbers</h2>
                    <div className='space-y-8 text-lg sm:space-y-10'>
                        <div>
                            <p className='text-primary/80 mb-2'>
                                Average typing speed: 40 words per minute
                            </p>
                            <p className='text-primary/80'>
                                Average speaking speed: 150 words per minute
                            </p>
                        </div>
                        <p className='text-secondary text-2xl font-bold'>
                            You speak 3.75x faster than you type.
                        </p>
                        <div className='bg-background/80 rounded-lg p-8'>
                            <p className='mb-4 text-xl font-semibold'>
                                If you write for 2 hours per day:
                            </p>
                            <div className='space-y-2'>
                                <p>Typing: 4,800 words</p>
                                <p>Speaking: 18,000 words</p>
                            </div>
                            <p className='text-secondary mt-6 text-xl font-bold'>
                                You get back 88 minutes per day.
                            </p>
                            <p className='mt-2 text-lg'>7.3 hours per week.</p>
                            <p className='mt-4 text-2xl font-bold'>
                                Over a year, that's 380 hours.
                            </p>
                            <p className='text-primary/90 mt-6 text-xl'>
                                What would you do with an extra 380 hours?
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* What's Included */}
            <Section>
                <div id='pricing'>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        What's Included
                    </h2>
                    <div className='space-y-4 sm:space-y-5 md:space-y-6'>
                        {[
                            {
                                title: 'Full access to Knowii Voice AI',
                                description:
                                    'The Windows version is available immediately. Buy your copy. Download today. Use it immediately. Linux and macOS versions coming soon.'
                            },
                            {
                                title: 'Lifetime updates',
                                description:
                                    'Every new feature, every improvement, every bug fix. Forever. No additional charges.'
                            },
                            {
                                title: 'All future features',
                                description:
                                    'Everything on the roadmap is included in your $49 purchase.'
                            },
                            {
                                title: 'Direct support from an actual human',
                                description:
                                    'Email me with questions or problems. I respond personally. No ticket systems, no chatbots.'
                            },
                            {
                                title: '30-day money-back guarantee',
                                description:
                                    "Try it for a month. If you don't love it, email me. I'll refund you, no questions asked."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='bg-background/50 flex items-start gap-3 rounded-lg p-4 sm:gap-4 sm:p-5 md:p-6'
                            >
                                <FaCheckCircle className='text-secondary mt-0.5 shrink-0 text-xl sm:text-2xl' />
                                <div>
                                    <h3 className='mb-1.5 text-lg font-bold sm:text-xl'>
                                        {item.title}
                                    </h3>
                                    <p className='text-primary/80 text-sm sm:text-base'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='bg-secondary/10 mt-8 rounded-lg p-6 text-center sm:mt-10 sm:p-8'>
                        <p className='mb-4 text-3xl font-bold'>$49, once</p>
                        <p className='text-primary/80 mb-2 text-lg'>Not $49 per month.</p>
                        <p className='text-primary/80 mb-2 text-lg'>Not $49 per year.</p>
                        <p className='mb-6 text-xl font-semibold'>$49, one time, forever.</p>
                        <p className='text-primary/80'>
                            Compare that to cloud voice-to-text services at $15-30/month. That's
                            $180-360 per year. $900-1,800 over five years.
                        </p>
                    </div>
                </div>
            </Section>

            {/* What's Coming */}
            <Section className='bg-background/50'>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        What's Coming (Included In Your Purchase)
                    </h2>
                    <p className='text-primary/80 mb-8 text-center text-lg'>
                        I'm actively building this. Here's what's next:
                    </p>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {[
                            {
                                title: 'Linux support',
                                description: 'Full feature parity for Linux users'
                            },
                            {
                                title: 'macOS support',
                                description: 'Full feature parity for Mac users'
                            },
                            {
                                title: 'Support for more AI models',
                                description:
                                    'More AI models will be added for local and remote transcription and post-processing'
                            },
                            {
                                title: 'Smart AI-enabled post-processing',
                                description:
                                    'Apply custom transformations to your transcriptions: remove filler words, fix commonly misrecognized words, use AI. Configure AI-enabled pipelines, detect applications/context and go from raw transcriptions to specialized outputs'
                            },
                            {
                                title: 'Live transcription',
                                description:
                                    'See words appear in real-time as you speak, not after you finish'
                            },
                            {
                                title: 'Voice Trigger Words/Phrases',
                                description:
                                    'Keyboard-less mode where a trigger word or phrase initiates recording and transcription'
                            },
                            {
                                title: 'Voice Commands & Action System',
                                description: 'Use your voice to trigger concrete actions'
                            },
                            {
                                title: 'Cross-Device Command & Control',
                                description: 'Use the app on one device to command other ones'
                            },
                            {
                                title: 'Mute/Pause Media while recording',
                                description:
                                    "Disable noise while you're recording to get the best possible transcriptions"
                            },
                            {
                                title: 'File transcription',
                                description:
                                    'Drag and drop audio files (meeting recordings, interviews, podcasts) to transcribe them'
                            },
                            {
                                title: 'Internationalization',
                                description:
                                    'Deeper support for translations. Different keyboard shortcuts that transcribe in different languages'
                            },
                            {
                                title: 'Auto update system',
                                description: 'Receive new versions automatically'
                            },
                            {
                                title: 'Portable Version',
                                description:
                                    'Uncompress. Run. Transcribe. Everything stored in one folder'
                            },
                            {
                                title: 'CLI and API',
                                description:
                                    'Integrate Knowii Voice AI with other applications and systems'
                            },
                            {
                                title: 'Usage Statistics',
                                description: 'Get statistics about your usage'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='border-primary/10 bg-background/50 rounded-lg border p-4 sm:p-5'
                            >
                                <h3 className='text-secondary mb-2 text-lg font-bold'>
                                    {item.title}
                                </h3>
                                <p className='text-primary/70 text-sm'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-primary mt-8 text-center text-lg font-semibold'>
                        All of this, and everything else I build for Knowii Voice AI, is included in
                        your purchase. No upgrade fees.
                    </p>
                </div>
            </Section>

            {/* How It Actually Works */}
            <Section>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        How It Actually Works (Technical Details)
                    </h2>
                    <div className='text-primary/80 space-y-6 text-lg'>
                        <p>
                            Knowii Voice AI uses state-of-the-art speech recognition AI models such
                            as <strong>Whisper</strong> and <strong>Parakeet</strong>. The same
                            technology that powers professional transcription services, but running
                            locally on your computer.
                        </p>
                        <p>
                            You download the model once (2-10 GB depending on which model you
                            choose).
                        </p>
                        <p>
                            When you record your voice, the audio stays on your computer and gets
                            transcribed by the local AI model running on your computer. No Internet
                            required. No cloud API. No sending your data anywhere.
                        </p>
                        <p>
                            If your computer has an NVIDIA GPU, transcription is accelerated and
                            near-instant. If you're on CPU-only, it takes a few seconds. Still fast
                            enough to be useful.
                        </p>
                        <div className='bg-background/50 rounded-lg p-6'>
                            <p className='mb-4 font-semibold'>
                                You can choose between multiple models based on your priorities:
                            </p>
                            <ul className='ml-6 list-disc space-y-2'>
                                <li>
                                    <strong>Small models</strong> - Fast, near-instant results, good
                                    accuracy
                                </li>
                                <li>
                                    <strong>Medium models</strong> - Balanced speed and accuracy
                                </li>
                                <li>
                                    <strong>Large models</strong> - Slower but more accurate, great
                                    for technical content or accents
                                </li>
                            </ul>
                        </div>
                        <p>
                            Switch between them anytime. The app manages loading and unloading
                            automatically.
                        </p>
                    </div>
                </div>
            </Section>

            {/* About the Creator */}
            <Section className='bg-background/50'>
                <div>
                    <h2 className='mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16'>
                        Who I Am
                    </h2>
                    <div className='flex flex-col items-center gap-8 md:flex-row'>
                        <div className='shrink-0'>
                            <img
                                src='/assets/images/2025-11-03-Seb.png'
                                alt='Sébastien Dubois'
                                className='h-48 w-48 rounded-full object-cover'
                            />
                        </div>
                        <div className='text-primary/80 space-y-4 text-lg'>
                            <p>
                                I"m{' '}
                                <a
                                    href='https://www.dsebastien.net/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary font-semibold hover:underline'
                                >
                                    Sébastien Dubois
                                </a>
                                , a Knowledge Management Expert, Software Architect, and Author with
                                20+ years in IT.
                            </p>
                            <p>
                                I've been a software developer, technical lead, solution architect,
                                and CTO. I wrote and published multiple books (e.g., Learn
                                TypeScript by Building Web Applications, Dev Concepts) and various
                                tools for knowledge workers.
                            </p>
                            <p>
                                I founded DeveloPassion back in 2019 and created the{' '}
                                <a
                                    href='https://knowii.net'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Knowii Community
                                </a>
                                , a community of practice helping thousands of professionals break
                                free from information overload.
                            </p>
                            <p>
                                My mission is simple: help knowledge workers achieve clarity with
                                systems that actually work.
                            </p>
                            <p>
                                I've built the{' '}
                                <a
                                    href='https://obsidianstarterkit.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Obsidian Starter Kit
                                </a>
                                , the{' '}
                                <a
                                    href='https://store.dsebastien.net/l/knowledge-worker-kit'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Knowledge Worker Kit
                                </a>
                                , taught courses on Personal Knowledge Management, and created tools
                                that help people organize, capture, and leverage their knowledge
                                effectively.
                            </p>
                            <p>
                                I work ~50% on entrepreneurship and ~50% as an employee. I'm not
                                VC-backed. I"m just an independent maker building tools that respect
                                users instead of extracting from them.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why I Built This */}
            <Section>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        Why I Built This
                    </h2>
                    <div className='text-primary/80 space-y-6 text-lg'>
                        <p>
                            I tried every voice-to-text tool out there. Cloud services that cost
                            $20/month. Browser extensions that only work in Chrome. Mobile apps that
                            don't talk to my computer.
                        </p>
                        <p>They all had the same problems:</p>
                        <ul className='ml-6 list-disc space-y-2'>
                            <li>They sent my voice to someone else's servers</li>
                            <li>They cost money forever</li>
                            <li>They had usage limits</li>
                            <li>They only worked in specific apps</li>
                        </ul>
                        <p className='text-primary font-semibold'>I wanted something different.</p>
                        <div className='space-y-2'>
                            <p>Something that respects privacy.</p>
                            <p>Something I could own, not rent.</p>
                            <p>Something that works everywhere.</p>
                            <p>Something that supported state-of-the-art AI models.</p>
                            <p>Something that worked seamlessly across applications.</p>
                            <p>Something I could leverage to better leverage AI.</p>
                        </div>
                        <p className='text-secondary text-xl font-semibold'>
                            I couldn't find it. So I built Knowii Voice AI.
                        </p>
                        <p>Knowii Voice AI is what I wanted to exist in the world.</p>
                        <p>
                            Privacy-first. Runs entirely on your computer. Pay once, own it forever.
                            Works in literally every application.
                        </p>
                        <p>
                            As a knowledge worker myself, I know how crucial speed and efficiency
                            are. The keyboard is the biggest bottleneck between your thoughts and
                            getting things done. Voice is the answer — but only if it's private,
                            reliable, and actually works everywhere you need it.
                        </p>
                        <p>
                            This tool is part of a growing ecosystem I'm building around the Knowii
                            Community. It's designed to integrate with everything else I create —
                            tools and services that work together to help you capture, organize, and
                            leverage knowledge more effectively.
                        </p>
                        <p>If you've been frustrated by the same things, this is for you.</p>
                        <p>
                            If building systems that respect users instead of extracting from them
                            resonates with you, I'd love for you to try it and support my work.
                        </p>
                        <p className='text-right text-xl font-semibold'>— Sébastien</p>
                    </div>
                </div>
            </Section>

            {/* Get Started */}
            <Section className='bg-background/50'>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        Get Started in 5 Minutes
                    </h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                        <div className='text-center'>
                            <div className='mb-4 flex justify-center'>
                                <div className='bg-secondary flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white'>
                                    1
                                </div>
                            </div>
                            <h3 className='mb-3 text-xl font-bold'>
                                Purchase, download and install
                            </h3>
                            <p className='text-primary/80'>
                                Buy on Gumroad, get instant access. Download. Install in 60 seconds.
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='mb-4 flex justify-center'>
                                <div className='bg-secondary flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white'>
                                    2
                                </div>
                            </div>
                            <h3 className='mb-3 text-xl font-bold'>Quick setup</h3>
                            <p className='text-primary/80'>
                                Open the app. Pick your language. Choose an AI model. Download it
                                (one time, 2-10 GB).
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='mb-4 flex justify-center'>
                                <div className='bg-secondary flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white'>
                                    3
                                </div>
                            </div>
                            <h3 className='mb-3 text-xl font-bold'>Press Ctrl+Space and speak</h3>
                            <p className='text-primary/80'>
                                Press Ctrl+Space anywhere. Speak. Release. Done.
                            </p>
                        </div>
                    </div>
                    <div className='mt-8 text-center'>
                        <p className='text-primary/80 mb-4 text-lg'>
                            No account creation. No registration. No complex setup.
                        </p>
                        <p className='text-secondary text-xl font-semibold'>
                            You're transcribing your voice in under 5 minutes from purchase.
                        </p>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section>
                <div>
                    <h2 className='mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl'>
                        Common Questions
                    </h2>
                    <div className='space-y-4 sm:space-y-5 md:space-y-6'>
                        {[
                            {
                                q: 'Is this actually private?',
                                a: 'Yes. Everything runs on your computer. Your voice recordings are stored locally. The AI model runs locally. Nothing is sent to any server. You can run it with your internet connection disabled and it works perfectly. Support will be added for remote/cloud-based AI models, but the default will always be local-first.'
                            },
                            {
                                q: 'Does it work offline?',
                                a: 'Yes. After you download the AI model once (2-10 GB depending on the chosen model), everything runs on your computer. Your laptop could be in airplane mode and it would still work perfectly.'
                            },
                            {
                                q: 'How fast is it?',
                                a: "Depends on your computer, which model you pick and how long you speak. On a decent laptop with the small model, you'll get results in 1-3 seconds for a few sentences. With GPU acceleration, it's near-instant."
                            },
                            {
                                q: 'What languages are supported?',
                                a: 'All major languages: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, and many more. You select your language in settings. Note that different models support different languages. Some also have specific variants for certain languages.'
                            },
                            {
                                q: 'Will this work on my computer?',
                                a: "If you're running Windows 10/11, yes. macOS and Linux support are coming. You don't need a powerful computer, but GPU acceleration helps (NVIDIA CUDA)."
                            },
                            {
                                q: 'Can I customize the keyboard shortcut?',
                                a: 'Yes. The default is Ctrl+Space, but you can change it to whatever you want in settings.'
                            },
                            {
                                q: 'Can I use this at work?',
                                a: 'Yes. Commercial license included. Use it for personal projects, professional work, client communications, whatever you need.'
                            },
                            {
                                q: 'Will the price increase?',
                                a: 'Yes. This is Early Access pricing. When the product leaves beta, the price will go up. Buy now to lock in lifetime access at this price.'
                            },
                            {
                                q: 'How accurate is it?',
                                a: "Very. Whisper and Parakeet are among the best free speech recognition models available today. Accuracy depends on audio quality, background noise, and which model you use. Larger models are more accurate but slower. In practice, it's accurate enough for daily use without constant corrections."
                            },
                            {
                                q: 'What microphone do I need?',
                                a: "Whatever you already have. Built-in laptop mics work. USB mics work. Headset mics work. Better microphones produce better results, but you don't need to buy anything special."
                            },
                            {
                                q: 'What about my clipboard?',
                                a: "The app saves your clipboard before pasting, then restores it after. Your copied content isn't lost."
                            },
                            {
                                q: 'What if I have problems?',
                                a: "Email me. I'll help. If something's broken, I'll do my best to fix it. If something's confusing, I'll explain it. You're not alone."
                            },
                            {
                                q: "What's the catch with Early Access?",
                                a: "There's no catch. The product works now. I'm calling it Early Access because I'm actively building new features based on user feedback. You get to help shape what gets built next, and you get the lowest price it will ever be."
                            },
                            {
                                q: "What's your refund policy?",
                                a: "30-day money-back guarantee. If you don't like it, email me and I'll refund you. No argument, no hassle."
                            },
                            {
                                q: 'How does this relate to your other products and services?',
                                a: "Knowii Voice AI is part of a growing ecosystem of tools and services I'm building around the Knowii Community (https://www.store.dsebastien.net/l/knowii). This is how I build: interconnected systems that amplify the way you think and work. Voice AI helps you capture thoughts faster. The Knowii Community helps you organize and leverage that knowledge. The Knowledge Worker Kit (https://store.dsebastien.net/l/knowledge-worker-kit) gives you the frameworks to use it all effectively."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='bg-background/50 rounded-lg p-4 sm:p-5 md:p-6'
                            >
                                <h3 className='mb-2 text-lg font-bold sm:text-xl'>{item.q}</h3>
                                <p className='text-primary/80 text-sm sm:text-base'>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className='bg-secondary/10'>
                <div className='text-center'>
                    <h2 className='mb-6 text-3xl font-bold sm:text-4xl md:text-5xl'>Two Choices</h2>
                    <div className='mb-8 space-y-8 text-lg sm:space-y-10'>
                        <div>
                            <p className='mb-2 font-semibold'>Keep typing.</p>
                            <p className='text-primary/80'>
                                Keep spending hours every day pressing keys. Keep getting tired
                                hands and tired eyes. Keep feeling the gap between how fast you
                                think and how slow your words appear.
                            </p>
                        </div>
                        <div>
                            <p className='text-secondary mb-2 font-semibold'>Or speak instead.</p>
                            <p className='text-primary/80'>
                                Get those hours back. Finish writing tasks faster. Stop fighting
                                your keyboard. $49, one time. Yours forever.
                            </p>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <CTAButton
                            href='https://developassion.gumroad.com/l/knowii-voice-ai'
                            size='large'
                        >
                            Get Knowii Voice AI - $49
                        </CTAButton>
                    </div>

                    <div className='text-primary/70 space-y-2 text-sm'>
                        <div className='flex items-center justify-center gap-2'>
                            <FaWindows className='text-lg' />
                            <span>Windows 10/11 version available now</span>
                        </div>
                        <p>Linux and macOS coming soon</p>
                        <p>30-day money-back guarantee • Lifetime updates included</p>
                        <p className='text-xs'>Secure checkout via Gumroad</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default HomePage
