import { Link } from 'react-router'
import { FaShoppingCart } from 'react-icons/fa'
import CTAButton from '@/components/ui/cta-button'

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-black/5">
			<nav className="mx-auto max-w-7xl">
				<div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8 lg:px-12 xg:px-16 xl:px-20">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							to="/"
							className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 sm:gap-4"
						>
							<div className="relative">
								<div className="absolute inset-0 rounded-full bg-secondary/20 blur-md"></div>
								<img
									src="/assets/images/icon.svg"
									alt="Knowii Voice AI"
									className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
								/>
							</div>
							<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl md:text-2xl">
								Knowii Voice AI
							</span>
						</Link>
					</div>

					{/* CTA Button */}
					<CTAButton href="https://store.dsebastien.net/l/knowii-voice-ai">
						<FaShoppingCart className="inline md:mr-2" />
						<span className="hidden md:inline">Get it now - $49</span>
					</CTAButton>
				</div>
			</nav>
		</header>
	)
}

export default Header
