import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = (): void => {
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<button
			onClick={scrollToTop}
			className={cn(
				'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 sm:bottom-8 sm:right-8 md:h-14 md:w-14 lg:bottom-10 lg:right-10',
				isVisible
					? 'translate-y-0 opacity-100'
					: 'pointer-events-none translate-y-16 opacity-0'
			)}
			aria-label="Scroll to top"
		>
			<FaArrowUp className="text-lg text-white md:text-xl" />
		</button>
	)
}

export default ScrollToTopButton
