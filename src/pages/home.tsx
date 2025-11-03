import Section from '@/components/ui/section'
import CTAButton from '@/components/ui/cta-button'
import { FaCheckCircle, FaWindows } from 'react-icons/fa'

const HomePage: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			{/* Hero Section */}
			<Section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 xg:pt-24 xl:pt-28">
				<div className="text-center">
					<h1 className="mb-6 text-4xl font-bold leading-tight sm:mb-8 sm:text-5xl md:text-6xl lg:mb-10 lg:text-7xl">
						You Think Faster Than You Type
					</h1>
					<p className="mb-8 text-xl text-primary/80 sm:mb-10 sm:text-2xl md:text-3xl lg:mb-12">
						Press. Speak. Release. Your words appear exactly where
						you need them.
					</p>
					<p className="mb-10 text-lg text-primary/70 sm:mb-12 sm:text-xl lg:mb-14">
						Works in every app. Runs on your computer. Costs $49,
						one time.
					</p>
					<div className="mb-16 flex flex-col items-center gap-6 sm:mb-20 lg:mb-24">
						<CTAButton
							href="https://developassion.gumroad.com/l/knowii-voice-ai"
							size="large"
						>
							Get it now - $49
						</CTAButton>
						<p className="text-sm text-primary/60">
							One-time payment. No subscription required.
						</p>
					</div>

					{/* Hero Video */}
					<div className="flex justify-center">
						<div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl">
							<iframe
								src="https://www.youtube.com/embed/Z3nnUCJRWhI"
								title="Knowii Voice AI Demo"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="absolute inset-0 h-full w-full"
							/>
						</div>
					</div>
				</div>
			</Section>

			{/* Your Reality Right Now */}
			<Section className="bg-background/50">
				<div>
					<h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16">
						Your Reality Right Now
					</h2>
					<div className="space-y-8 text-lg text-primary/80 sm:space-y-10 lg:text-xl">
						<p>Typing is slow.</p>
						<p>
							You know exactly what you want to say. The words are
							RIGHT THERE in your head.
						</p>
						<p>
							But your fingers can't keep up. Getting it from your
							brain to the screen takes forever.
						</p>
						<p>
							Your fingers hunt for keys. Autocorrect changes
							words you didn't want changed. You stop to fix
							typos. You lose your train of thought.
						</p>
						<p>
							Five minutes later, you've written three sentences.
						</p>
						<p className="text-xl font-semibold text-primary">
							This happens dozens of times every single day.
						</p>
						<p>
							The bottleneck isn't your brain. It's your keyboard.
						</p>
						<div className="my-8 rounded-lg bg-secondary/10 p-6 text-center">
							<p className="mb-2 text-2xl font-bold text-secondary">
								The average person types 40 words per minute.
							</p>
							<p className="text-2xl font-bold">
								You speak at 150 words per minute.
							</p>
							<p className="mt-4 text-xl text-primary/90">
								That"s nearly{' '}
								<span className="text-secondary">4x</span>{' '}
								faster.
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Picture This Instead */}
			<Section>
				<div>
					<h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16">
						Picture This Instead
					</h2>
					<div className="space-y-8 sm:space-y-10 text-lg text-primary/80">
						<p className="text-2xl font-semibold text-primary">
							You, tomorrow
						</p>
						<p>You open an email.</p>
						<p>
							You see a message that needs a thoughtful response.
							The kind that would normally take you ten minutes to
							type carefully.
						</p>
						<p>
							Instead of typing you just press and hold
							Ctrl+Space.
						</p>
						<p>
							You speak, naturally, like you're talking to a
							friend: "Hey Alexis. Thanks for reaching out about
							this. I've been thinking about the same thing, and
							here"s what I think we should do..."
						</p>
						<p>You release the keys.</p>
						<p>
							The words appear. Exactly where your cursor is.
							Exactly what you said.
						</p>
						<p>
							You read it once, make a tiny edit, and hit send.
							Done!
						</p>
						<p className="text-xl font-semibold text-secondary">
							You just saved five minutes.
						</p>
						<p>
							Now multiply that by every email, every message,
							every document, every blog post, every AI prompt,
							etc. <em>Everything</em> you write in a week.
						</p>
						<p className="text-xl font-semibold text-primary">
							How many hours will you get back?
						</p>
					</div>
				</div>
			</Section>

			{/* This Already Exists */}
			<Section id="how-it-works" className="bg-background/50">
				<div>
					<h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16">
						This Already Exists
					</h2>
					<p className="mb-6 text-center text-xl">
						It's called{' '}
						<span className="text-secondary">Knowii Voice AI</span>.
					</p>
					<p className="mb-8 text-center text-lg text-primary/80">
						It's a voice-to-text application that runs entirely on
						your computer.
					</p>
					<p className="mb-6 text-center text-lg text-primary/80">
						One keyboard shortcut. Any application. Complete
						privacy.
					</p>

					<div className="space-y-8">
						<div>
							<h3 className="mb-3 text-2xl font-bold">
								Press and hold Ctrl+Space.
							</h3>
							<p className="text-lg text-primary/80">
								The app starts recording your voice. You'll hear
								a subtle sound so you know it's listening.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-2xl font-bold">
								Speak naturally.
							</h3>
							<p className="text-lg text-primary/80">
								Like you're talking to someone. Don't slow down.
								Don't enunciate weirdly. Just talk.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-2xl font-bold">
								Release the key.
							</h3>
							<p className="text-lg text-primary/80">
								AI transcribes your words (on your computer,
								offline) and pastes them exactly where your
								cursor is.
							</p>
						</div>

						<p className="text-center text-2xl font-bold text-secondary">
							That's it.
						</p>

						<div className="space-y-3 text-lg text-primary/80">
							<p>
								No cloud. No lag. No usage limits. No monthly
								fee.
							</p>
							<p>
								Works in Gmail, Notion, Microsoft Word,
								Microsoft Teams, Slack, Discord, WhatsApp,
								Telegram, VS Code, your terminal... Literally
								any application where you can type.
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Screenshots Section */}
			<Section className="lg:!max-w-[1400px] xl:!max-w-[1600px]">
				<div>
					<h2 className="mb-12 text-center text-3xl font-bold sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:mb-20">
						See It In Action
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 xl:gap-12">
						<div className="overflow-hidden rounded-lg shadow-xl lg:shadow-2xl">
							<img
								src="/assets/screenshots/2025-11-03-settings-general.png"
								alt="Knowii Voice AI Settings"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="overflow-hidden rounded-lg shadow-xl lg:shadow-2xl">
							<img
								src="/assets/screenshots/2025-11-03-model-selection.png"
								alt="Model Selection"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="overflow-hidden rounded-lg shadow-xl lg:shadow-2xl">
							<img
								src="/assets/screenshots/2025-11-03-history.png"
								alt="Transcription History"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="overflow-hidden rounded-lg shadow-xl lg:shadow-2xl">
							<img
								src="/assets/screenshots/2025-11-03-onboarding.png"
								alt="Onboarding"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			{/* What Makes This Different */}
			<Section id="features" className="bg-background/50">
				<div>
					<h2 className="mb-12 text-center text-3xl font-bold sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:mb-20">
						What Makes This Different
					</h2>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="rounded-lg bg-background/80 p-6">
							<h3 className="mb-3 text-2xl font-bold text-secondary">
								You actually own it
							</h3>
							<p className="text-primary/80">
								Pay $49 once. Own it forever. Every update,
								every new feature, included. No subscription. No
								usage caps. No "premium tier."
							</p>
						</div>

						<div className="rounded-lg bg-background/80 p-6">
							<h3 className="mb-3 text-2xl font-bold text-secondary">
								It works in every app
							</h3>
							<p className="text-primary/80">
								Not just Google Docs. Not just Chrome. Every.
								Single. Application. If you can put your cursor
								there and type, you can speak there instead.
							</p>
						</div>

						<div className="rounded-lg bg-background/80 p-6">
							<h3 className="mb-3 text-2xl font-bold text-secondary">
								Your data stays yours
							</h3>
							<p className="text-primary/80">
								The AI models run on your computer by default.
								Your voice recordings are processed locally.
								Nothing leaves your machine unless you want to.
								No internet required after you download the AI
								model once.
							</p>
						</div>

						<div className="rounded-lg bg-background/80 p-6">
							<h3 className="mb-3 text-2xl font-bold text-secondary">
								You control which AI model
							</h3>
							<p className="text-primary/80">
								Multiple models supported. Download a small and
								fast model if you want near-instant results.
								Download a larger and more accurate one for
								technical content. Switch anytime.
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Who This Is For */}
			<Section>
				<div>
					<h2 className="mb-12 text-center text-3xl font-bold sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:mb-20">
						Who This Is Really For
					</h2>

					<div className="space-y-8">
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
							<div
								key={index}
								className="border-l-4 border-secondary pl-6"
							>
								<h3 className="mb-3 text-xl font-bold">
									{item.title}
								</h3>
								<p className="text-primary/80">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* The Numbers */}
			<Section className="bg-secondary/10">
				<div className="text-center">
					<h2 className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl">
						The Numbers
					</h2>
					<div className="space-y-8 sm:space-y-10 text-lg">
						<div>
							<p className="mb-2 text-primary/80">
								Average typing speed: 40 words per minute
							</p>
							<p className="text-primary/80">
								Average speaking speed: 150 words per minute
							</p>
						</div>
						<p className="text-2xl font-bold text-secondary">
							You speak 3.75x faster than you type.
						</p>
						<div className="rounded-lg bg-background/80 p-8">
							<p className="mb-4 text-xl font-semibold">
								If you write for 2 hours per day:
							</p>
							<div className="space-y-2">
								<p>Typing: 4,800 words</p>
								<p>Speaking: 18,000 words</p>
							</div>
							<p className="mt-6 text-xl font-bold text-secondary">
								You get back 88 minutes per day.
							</p>
							<p className="mt-2 text-lg">7.3 hours per week.</p>
							<p className="mt-4 text-2xl font-bold">
								Over a year, that's 380 hours.
							</p>
							<p className="mt-6 text-xl text-primary/90">
								What would you do with an extra 380 hours?
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* What's Included */}
			<Section>
				<div id="pricing">
					<h2 className="mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
						What's Included
					</h2>
					<div className="space-y-4 sm:space-y-5 md:space-y-6">
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
								className="flex items-start gap-3 rounded-lg bg-background/50 p-4 sm:gap-4 sm:p-5 md:p-6"
							>
								<FaCheckCircle className="mt-0.5 shrink-0 text-xl text-secondary sm:text-2xl" />
								<div>
									<h3 className="mb-1.5 text-lg font-bold sm:text-xl">
										{item.title}
									</h3>
									<p className="text-sm text-primary/80 sm:text-base">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 rounded-lg bg-secondary/10 p-6 text-center sm:mt-10 sm:p-8">
						<p className="mb-4 text-3xl font-bold">$49, once</p>
						<p className="mb-2 text-lg text-primary/80">
							Not $49 per month.
						</p>
						<p className="mb-2 text-lg text-primary/80">
							Not $49 per year.
						</p>
						<p className="mb-6 text-xl font-semibold">
							$49, one time, forever.
						</p>
						<p className="text-primary/80">
							Compare that to cloud voice-to-text services at
							$15-30/month. That's $180-360 per year. $900-1,800
							over five years.
						</p>
					</div>
				</div>
			</Section>

			{/* About the Creator */}
			<Section className="bg-background/50">
				<div>
					<h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:mb-16">
						Who I Am
					</h2>
					<div className="flex flex-col items-center gap-8 md:flex-row">
						<div className="shrink-0">
							<img
								src="/assets/images/2025-11-03-Seb.png"
								alt="Sébastien Dubois"
								className="h-48 w-48 rounded-full object-cover"
							/>
						</div>
						<div className="space-y-4 text-lg text-primary/80">
							<p>
								I"m{' '}
								<a
									href="https://www.dsebastien.net/about"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-secondary hover:underline"
								>
									Sébastien Dubois
								</a>
								, a Knowledge Management Expert, Software
								Architect, and Author with 20+ years in IT.
							</p>
							<p>
								I founded{' '}
								<a
									href="https://knowii.net"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary hover:underline"
								>
									Knowii Community
								</a>
								, helping thousands of professionals break free
								from information overload.
							</p>
							<p>
								My mission is simple: help knowledge workers
								achieve clarity with systems that actually work.
							</p>
							<p>
								I'm not VC-backed. I"m just an independent maker
								building tools that respect users instead of
								extracting from them.
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQ */}
			<Section>
				<div>
					<h2 className="mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
						Common Questions
					</h2>
					<div className="space-y-4 sm:space-y-5 md:space-y-6">
						{[
							{
								q: 'Is this actually private?',
								a: 'Yes. Everything runs on your computer. Your voice recordings are stored locally. The AI model runs locally. Nothing is sent to any server. You can run it with your internet connection disabled and it works perfectly.'
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
								a: 'All major languages: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, and many more. You select your language in settings.'
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
							}
						].map((item, index) => (
							<div
								key={index}
								className="rounded-lg bg-background/50 p-4 sm:p-5 md:p-6"
							>
								<h3 className="mb-2 text-lg font-bold sm:text-xl">
									{item.q}
								</h3>
								<p className="text-sm text-primary/80 sm:text-base">
									{item.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* Final CTA */}
			<Section className="bg-secondary/10">
				<div className="text-center">
					<h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
						Two Choices
					</h2>
					<div className="mb-8 space-y-8 sm:space-y-10 text-lg">
						<div>
							<p className="mb-2 font-semibold">Keep typing.</p>
							<p className="text-primary/80">
								Keep spending hours every day pressing keys.
								Keep getting tired hands and tired eyes. Keep
								feeling the gap between how fast you think and
								how slow your words appear.
							</p>
						</div>
						<div>
							<p className="mb-2 font-semibold text-secondary">
								Or speak instead.
							</p>
							<p className="text-primary/80">
								Get those hours back. Finish writing tasks
								faster. Stop fighting your keyboard. $49, one
								time. Yours forever.
							</p>
						</div>
					</div>

					<div className="mb-6">
						<CTAButton
							href="https://developassion.gumroad.com/l/knowii-voice-ai"
							size="large"
						>
							Get Knowii Voice AI - $49
						</CTAButton>
					</div>

					<div className="space-y-2 text-sm text-primary/70">
						<div className="flex items-center justify-center gap-2">
							<FaWindows className="text-lg" />
							<span>Windows 10/11 version available now</span>
						</div>
						<p>Linux and macOS coming soon</p>
						<p>
							30-day money-back guarantee • Lifetime updates
							included
						</p>
						<p className="text-xs">Secure checkout via Gumroad</p>
					</div>
				</div>
			</Section>
		</div>
	)
}

export default HomePage
